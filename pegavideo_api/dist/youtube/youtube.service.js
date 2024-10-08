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
exports.YoutubeService = void 0;
const common_1 = require("@nestjs/common");
const ytdl = require('ytdl-core');
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const typeorm_2 = require("typeorm");
let YoutubeService = class YoutubeService {
    constructor(ConsultaYoutubeRepository) {
        this.ConsultaYoutubeRepository = ConsultaYoutubeRepository;
    }
    async downloadVideo(videoURL, ip) {
        let videoUrls = new Set();
        if (!videoURL || videoURL.trim() === '') {
            return ["URL needed"];
        }
        try {
            const info = await ytdl.getInfo(videoURL);
            const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
            const consultaYoutube = new entities_1.ConsultaYoutube();
            consultaYoutube.url = format.url;
            consultaYoutube.ip = ip;
            this.ConsultaYoutubeRepository.save(consultaYoutube);
            return format.url;
        }
        catch (error) {
            console.error(error);
        }
    }
};
exports.YoutubeService = YoutubeService;
exports.YoutubeService = YoutubeService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(entities_1.ConsultaYoutube)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], YoutubeService);
//# sourceMappingURL=youtube.service.js.map