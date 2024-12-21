import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Blog } from '../entities/blog.entity';
import { Repository } from 'typeorm';
import { Profile } from 'src/profile/entites/profile.entity';
import { CreateBlogDto } from '../dto/createblog.dto';

@Injectable()
export class BlogServiceService {
    constructor(@InjectRepository(Blog) private repo:Repository<Blog>,@InjectRepository(Profile) private profileRepo:Repository<Profile>){}
    
    async getMany(){
        return await this.repo.find();
    }

    async getById(id: number): Promise<Blog | null> {
        const post = await this.repo.findOne({
            where: { Blog_id: id }, 
            relations: ['profile'], 
        });
    
        if (!post) {
            throw new Error(`Blog with ID ${id} not found`);
        }
    
        return post;
    }
  
    async getPostsByProfileId(profileId: number) {
        const profile = await this.profileRepo.findOne({
          where: { profileid: profileId },
        });
    
        if (!profile) {
          throw new Error('Profile not found');
        }
    
        const blogs = await this.repo.find({
          where: { profile: profile }, 
        });
    
        return blogs;
      }

    async createOne(dto: CreateBlogDto, profileId: number): Promise<Blog> {

        const author = await this.profileRepo.findOne({ where: { profileid: profileId } });
        if (!author) {
            throw new Error(`Profile with ID ${profileId} not found`);
        }
    
        
        const post = this.repo.create({
            title: dto.title,
            image: dto.image,
            blog: dto.blog,
            profile: author, 
        });
    
        
        return await this.repo.save(post);
    }
    async deleteBlog(blogId: number): Promise<void> {
    
        const blog = await this.repo.findOne({ where: { Blog_id: blogId } });
        if (!blog) {
            throw new Error(`Blog with ID ${blogId} not found`);
        }
    
        
        await this.repo.remove(blog);
        
    }
    
    
}
