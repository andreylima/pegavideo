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
exports.InstagramController = void 0;
const common_1 = require("@nestjs/common");
const instagram_service_1 = require("./instagram.service");
const isURL_1 = require("validator/lib/isURL");
let InstagramController = class InstagramController {
    constructor(instagramService) {
        this.instagramService = instagramService;
    }
    async downloadVideos(url, req) {
        if (!(0, isURL_1.default)(url, { protocols: ['http', 'https'], require_protocol: true })) {
            throw new common_1.BadRequestException('Invalid URL');
        }
        if (url.length > 500) {
            throw new common_1.BadRequestException('URL is too long');
        }
        return this.instagramService.downloadVideos(url, req.ip);
    }
    async downloadPics(url) {
        if (!(0, isURL_1.default)(url, { protocols: ['http', 'https'], require_protocol: true })) {
            throw new common_1.BadRequestException('Invalid URL');
        }
        if (url.length > 500) {
            throw new common_1.BadRequestException('URL is too long');
        }
        return this.instagramService.downloadPics(url);
    }
};
exports.InstagramController = InstagramController;
__decorate([
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], InstagramController.prototype, "downloadVideos", null);
__decorate([
    (0, common_1.Get)('/pics'),
    __param(0, (0, common_1.Query)('url')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstagramController.prototype, "downloadPics", null);
exports.InstagramController = InstagramController = __decorate([
    (0, common_1.Controller)('api/download/instagram'),
    __metadata("design:paramtypes", [instagram_service_1.InstagramService])
], InstagramController);
//# sourceMappingURL=instagram.controller.js.map