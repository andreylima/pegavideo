import { Injectable } from '@nestjs/common';
const ytdl = require('ytdl-core');
import { InjectRepository } from '@nestjs/typeorm';
import {ConsultaYoutube} from './entities'
import { Repository } from 'typeorm';

@Injectable()
export class YoutubeService {
    constructor(
        @InjectRepository(ConsultaYoutube)
        private ConsultaYoutubeRepository: Repository<ConsultaYoutube>,
      ) {}

    async downloadVideo(videoURL: string, ip: any) {
        let videoUrls = new Set<string>();
        if (!videoURL || videoURL.trim() === '') {
            return ["URL needed"];
        }
        try {
            const info = await ytdl.getInfo(videoURL);
            
    
            // To get downloadable URLs:
            const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
            const consultaYoutube = new ConsultaYoutube();
            consultaYoutube.url = format.url;
            consultaYoutube.ip = ip
            this.ConsultaYoutubeRepository.save(consultaYoutube)
            return format.url;
        } catch (error) {
            console.error(error);
        }
    }
}