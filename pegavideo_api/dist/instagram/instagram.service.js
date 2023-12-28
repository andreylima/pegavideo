"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstagramService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const puppeteer = require("puppeteer");
const typeorm_2 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
let InstagramService = class InstagramService {
    constructor(consultaInstagramRepository) {
        this.consultaInstagramRepository = consultaInstagramRepository;
    }
    async downloadVideos(url, ip) {
        let videoUrls = new Set();
        let processedSegments = new Set();
        let videoIndex = 1;
        let maxIndex = 10;
        const browser = await puppeteer.launch({ 'headless': "new" });
        const page = await browser.newPage();
        while (videoIndex <= maxIndex) {
            let currentUrl = this.addIndexToUrl(url, videoIndex);
            await page.goto(currentUrl);
            await page.waitForSelector('video');
            await page.waitForSelector('img[srcset^="https://scontent"]');
            maxIndex = await page.evaluate(() => {
                return document.querySelectorAll('._acnb').length;
            });
            const newVideoUrls = await page.evaluate(() => {
                const videos = Array.from(document.querySelectorAll('video'));
                return videos.map(video => video.src);
            });
            const consultaInstagram = new entities_1.ConsultaInstagram();
            consultaInstagram.url = url;
            consultaInstagram.ip = ip;
            this.consultaInstagramRepository.save(consultaInstagram);
            newVideoUrls.forEach(url => {
                const fourthSegment = this.getFourthPathSegment(url);
                console.log(fourthSegment);
                if (fourthSegment && !processedSegments.has(fourthSegment)) {
                    processedSegments.add(fourthSegment);
                    videoUrls.add(url);
                }
            });
            videoIndex++;
        }
        await browser.close();
        return Array.from(videoUrls);
    }
    async downloadPics(url) {
        let picUrls = new Set();
        let processedSegments = new Set();
        let imgIndex = 1;
        let maxIndex = 10;
        const browser = await puppeteer.launch({ 'headless': "new" });
        const page = await browser.newPage();
        while (imgIndex <= maxIndex) {
            let currentUrl = this.addIndexToUrl(url, imgIndex);
            await page.goto(currentUrl, { waitUntil: 'networkidle2' });
            await page.waitForSelector('img[srcset^="https://scontent"]');
            maxIndex = await page.evaluate(() => {
                return document.querySelectorAll('._acnb').length;
            });
            const newpicUrls = await page.evaluate(() => {
                const pics = Array.from(document.querySelectorAll('img[srcset^="https://scontent"]'));
                return pics.map(pic => pic.src);
            });
            newpicUrls.forEach(url => {
                const fourthSegment = this.getFourthPathSegment(url);
                if (fourthSegment && !processedSegments.has(fourthSegment)) {
                    processedSegments.add(fourthSegment);
                    const consultaInstagram = new entities_1.ConsultaInstagram();
                    consultaInstagram.url = url;
                    this.consultaInstagramRepository.save(consultaInstagram).then(() => {
                        picUrls.add(url);
                    });
                }
            });
            imgIndex++;
        }
        await browser.close();
        return Array.from(picUrls);
    }
    getFourthPathSegment(url) {
        const urlObj = new URL(url);
        const pathSegments = urlObj.pathname.split('/');
        return pathSegments.length > 3 ? pathSegments[3] : null;
    }
    addIndexToUrl(url, index) {
        const urlObj = new URL(url);
        const params = new URLSearchParams(urlObj.search);
        params.set('img_index', String(index));
        urlObj.search = params.toString();
        return urlObj.toString();
    }
};
exports.InstagramService = InstagramService;
exports.InstagramService = InstagramService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(entities_1.ConsultaInstagram)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], InstagramService);
//# sourceMappingURL=instagram.service.js.map