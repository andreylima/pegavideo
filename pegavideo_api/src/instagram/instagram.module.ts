import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InstagramService } from './instagram.service';
import { InstagramController } from './instagram.controller';
import { ConsultaInstagram } from './entities';

@Module({
  imports: [
    TypeOrmModule.forFeature([ConsultaInstagram]), // Include your entity here
  ],
  providers: [InstagramService],
  controllers: [InstagramController]
})
export class InstagramModule {}
