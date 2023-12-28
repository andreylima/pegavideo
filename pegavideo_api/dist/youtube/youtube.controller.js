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
exports.YoutubeController = void 0;
const common_1 = require("@nestjs/common");
const youtube_service_1 = require("./youtube.service");
const isURL_1 = require("validator/lib/isURL");
let YoutubeController = class YoutubeController {
    constructor(youtubeService) {
        this.youtubeService = youtubeService;
    }
    async download(url, req) {
        if (!(0, isURL_1.default)(url, { protocols: ['http', 'https'], require_protocol: true })) {
            throw new common_1.BadRequestException('Invalid URL');
        }
        if (url.length > 500) {
            throw new common_1.BadRequestException('URL is too long');
        }
        return this.youtubeService.downloadVideo(url, req.ip);
    }
};
exports.YoutubeController = YoutubeController;
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('url')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], YoutubeController.prototype, "download", null);
exports.YoutubeController = YoutubeController = __decorate([
    (0, common_1.Controller)('api/download/youtube'),
    __metadata("design:paramtypes", [youtube_service_1.YoutubeService])
], YoutubeController);
//# sourceMappingURL=youtube.controller.js.map