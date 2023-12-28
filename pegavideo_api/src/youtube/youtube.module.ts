import { Module } from '@nestjs/common';
import { YoutubeService } from './youtube.service';
import { YoutubeController } from './youtube.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsultaYoutube } from './entities';
@Module({
  imports: [
    TypeOrmModule.forFeature([ConsultaYoutube]), // Include your entity here
  ],
  providers: [YoutubeService],
  controllers: [YoutubeController]
})
export class YoutubeModule {}
