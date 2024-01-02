import { Controller, Get, Query, BadRequestException, Req } from '@nestjs/common';
import { InstagramService } from './instagram.service';
import isURL from 'validator/lib/isURL';
import { Request } from 'express'; 

@Controller('api/download/instagram')
export class InstagramController {
  constructor(private readonly instagramService: InstagramService) {}

  @Get('/video')
  async downloadVideos(@Query('url') url: string, @Req() req: Request) {
    if (!isURL(url, { protocols: ['http','https'], require_protocol: true })) {
      throw new BadRequestException('Invalid URL');
    }

    if (url.length > 500) { // Adjust the length as appropriate
      throw new BadRequestException('URL is too long');
    }
    return this.instagramService.downloadVideos(url, req.ip);
  }

  @Get('/pics')
  async downloadPics(@Query('url') url: string) {
    if (!isURL(url, { protocols: ['http','https'], require_protocol: true })) {
      throw new BadRequestException('Invalid URL');
    }
    if (url.length > 500) { // Adjust the length as appropriate
      throw new BadRequestException('URL is too long');
    }
    return this.instagramService.downloadPics(url);
  }
}
