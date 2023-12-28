import { Controller, Get, Query, BadRequestException, Req   } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import isURL from 'validator/lib/isURL';
import { Request } from 'express'; 


@Controller('api/download/youtube')
export class YoutubeController {
  constructor(private readonly youtubeService: YoutubeService) {}

  @Get()
  async download(@Query('url') url: string, @Req() req: Request) {
    if (!isURL(url, { protocols: ['http','https'], require_protocol: true })) {
      throw new BadRequestException('Invalid URL');
    }

    if (url.length > 500) { // Adjust the length as appropriate
      throw new BadRequestException('URL is too long');
    }
    return this.youtubeService.downloadVideo(url, req.ip);
  }
}