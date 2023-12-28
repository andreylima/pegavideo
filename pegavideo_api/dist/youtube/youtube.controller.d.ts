import { YoutubeService } from './youtube.service';
import { Request } from 'express';
export declare class YoutubeController {
    private readonly youtubeService;
    constructor(youtubeService: YoutubeService);
    download(url: string, req: Request): Promise<any>;
}
