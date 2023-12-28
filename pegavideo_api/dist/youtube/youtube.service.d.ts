import { ConsultaYoutube } from './entities';
import { Repository } from 'typeorm';
export declare class YoutubeService {
    private ConsultaYoutubeRepository;
    constructor(ConsultaYoutubeRepository: Repository<ConsultaYoutube>);
    downloadVideo(videoURL: string, ip: any): Promise<any>;
}
