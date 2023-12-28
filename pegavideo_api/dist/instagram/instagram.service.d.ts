import { Repository } from 'typeorm';
import { ConsultaInstagram } from './entities';
export declare class InstagramService {
    private consultaInstagramRepository;
    constructor(consultaInstagramRepository: Repository<ConsultaInstagram>);
    downloadVideos(url: string, ip: any): Promise<string[]>;
    downloadPics(url: string): Promise<string[]>;
    getFourthPathSegment(url: string): string | null;
    addIndexToUrl(url: string, index: number): string;
}
