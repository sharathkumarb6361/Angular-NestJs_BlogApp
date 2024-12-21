import { Module } from '@nestjs/common';
import { Image } from './profimage/entities/profImage.entity';
import { ProfimageController } from './profimage/profimage.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports:[TypeOrmModule.forFeature([Image])],
    controllers: [ProfimageController],
})
export class ProfileImageModule {}
