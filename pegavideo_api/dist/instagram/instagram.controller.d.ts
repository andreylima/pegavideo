import { InstagramService } from './instagram.service';
import { Request } from 'express';
export declare class InstagramController {
    private readonly instagramService;
    constructor(instagramService: InstagramService);
    downloadVideos(url: string, req: Request): Promise<string[]>;
    downloadPics(url: string): Promise<string[]>;
}
