import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import * as puppeteer from 'puppeteer';
import { InjectRepository } from '@nestjs/typeorm';
import {ConsultaInstagram} from './entities'

@Injectable()
export class InstagramService {
    constructor(
      @InjectRepository(ConsultaInstagram)
      private consultaInstagramRepository: Repository<ConsultaInstagram>,
    ) {}

    async downloadVideos(url: string, ip: any): Promise<string[]> {
      
      let videoUrls = new Set<string>();
      let processedSegments = new Set<string>();
      let videoIndex = 1;
      let maxIndex = 10;
      const browser = await puppeteer.launch({'headless': "new"});
      const page = await browser.newPage();
      
      while (videoIndex <= maxIndex) {
        let currentUrl = this.addIndexToUrl(url, videoIndex);
        await page.goto(currentUrl);
        await page.waitForSelector('video');
        await page.waitForSelector('img[srcset^="https://scontent"]');
        maxIndex = await page.evaluate(() => {
            return document.querySelectorAll('._acnb').length;
        });
        const newVideoUrls = await page.evaluate(() => {
          const videos = Array.from(document.querySelectorAll('video'));
          return videos.map(video => video.src);
        });
        const consultaInstagram = new ConsultaInstagram();
        consultaInstagram.url = url;
        consultaInstagram.ip = ip;
        this.consultaInstagramRepository.save(consultaInstagram)
        newVideoUrls.forEach(url => {
          const fourthSegment = this.getFourthPathSegment(url);
          console.log(fourthSegment)
          if (fourthSegment && !processedSegments.has(fourthSegment)) {
            processedSegments.add(fourthSegment);
            videoUrls.add(url);
          }
        });
    
        videoIndex++;
      }
    
      await browser.close();
      return Array.from(videoUrls);
    }

    async downloadPics(url: string): Promise<string[]> {
      
      let picUrls = new Set<string>();
      let processedSegments = new Set<string>();
      let imgIndex = 1;
      let maxIndex = 10;
      const browser = await puppeteer.launch({'headless': "new"});
      const page = await browser.newPage();
      
      while (imgIndex <= maxIndex) {
        let currentUrl = this.addIndexToUrl(url, imgIndex);
        await page.goto(currentUrl, { waitUntil: 'networkidle2' });
        await page.waitForSelector('img[srcset^="https://scontent"]');
        maxIndex = await page.evaluate(() => {
            return document.querySelectorAll('._acnb').length;
        });
        
        const newpicUrls = await page.evaluate(() => {
          const pics = Array.from(document.querySelectorAll('img[srcset^="https://scontent"]'));
          return pics.map(pic => (pic as HTMLMediaElement).src);
        });
        
        newpicUrls.forEach(url => {
          const fourthSegment = this.getFourthPathSegment(url);
          if (fourthSegment && !processedSegments.has(fourthSegment)) {
            processedSegments.add(fourthSegment);
            const consultaInstagram = new ConsultaInstagram();
            consultaInstagram.url = url;
            this.consultaInstagramRepository.save(consultaInstagram).then(() => {
              picUrls.add(url);
            })
          }
        });
    
        imgIndex++;
      }
    
      await browser.close();
      return Array.from(picUrls);
    }

    getFourthPathSegment(url: string) {
      const urlObj = new URL(url);
      const pathSegments = urlObj.pathname.split('/');
      // Return the fourth segment (index 3) if it exists
      return pathSegments.length > 3 ? pathSegments[3] : null;
    }

    addIndexToUrl(url: string, index: number) {
    // Create a URL object
    const urlObj = new URL(url);

    // Use URLSearchParams to manipulate query parameters
    const params = new URLSearchParams(urlObj.search);

    // Set the 'img_index' parameter
    params.set('img_index', String(index));

    // Update the original URL's search part
    urlObj.search = params.toString();

    // Return the modified URL
    return urlObj.toString();
    }
  }