import { Body, Controller, Get, NotFoundException, Param, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';

import { extname } from 'path';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Image } from './entities/profImage.entity';
import { identity } from 'rxjs';

@Controller('profimage')
export class ProfimageController {
    constructor(
        @InjectRepository(Image)
        private readonly imageRepository: Repository<Image>,
      ) {}
    
      @Post()
      @UseInterceptors(
        FileInterceptor('file', {
          storage: diskStorage({
            destination: './uploads',
            filename: (req, file, cb) => {
              const randomName = Array(32)
                .fill(null)
                .map(() => Math.round(Math.random() * 16).toString(16))
                .join('');
              cb(null, `${randomName}${extname(file.originalname)}`);
            },
          }),
        }),
      )
      async uploadFile(
        @UploadedFile() file: Express.Multer.File,
        @Body('regNo') regNo: string, 
      ) {
        const baseUrl = `http://localhost:3000`; 
        const filePath = `${baseUrl}/uploads/${file.filename}`;
    
    
        const image = this.imageRepository.create({
          regNo,
          filename: file.filename,
          filepath: filePath,
        });
        await this.imageRepository.save(image);
    
        return { regNo, filename: image.filename, path: filePath };
      }

      @Get(':id1')
      async getImageById(@Param('id1') id1: string) {
        const imageRecord = await this.imageRepository.findOne({
          where: { regNo: id1 }, 
        });
      
        if (!imageRecord) {
          throw new NotFoundException(`Image with ID ${id1} not found`);
        }
      
        return {
          imageUrl: imageRecord.filepath,
        };
      }
      


}


