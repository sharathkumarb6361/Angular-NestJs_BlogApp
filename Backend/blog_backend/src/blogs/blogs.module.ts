import { Module } from '@nestjs/common';
import { BlogControllerController } from './blog-controller/blog-controller.controller';
import { BlogServiceService } from './blog-service/blog-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Blog } from './entities/blog.entity';
import { Profile } from 'src/profile/entites/profile.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Blog,Profile])],
  controllers: [BlogControllerController],
  providers: [BlogServiceService]
})
export class BlogsModule {}
