import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { YoutubeModule } from './youtube/youtube.module';
import { InstagramModule } from './instagram/instagram.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [YoutubeModule, 
            InstagramModule,
            TypeOrmModule.forRoot({
              type: 'postgres',
              host: 'localhost',
              port: 5432,
              username: "postgres",
              password: "admin123",
              database: "pegavideo",
              entities: ["dist/**/entities.js"],
              synchronize: true, // Set to false in production!
            }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
