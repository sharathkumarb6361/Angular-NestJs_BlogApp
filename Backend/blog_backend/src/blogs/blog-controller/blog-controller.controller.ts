import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post } from '@nestjs/common';
import { BlogServiceService } from '../blog-service/blog-service.service';
import { CreateBlogDto } from '../dto/createblog.dto';

@Controller('blog-controller')
export class BlogControllerController {
    constructor(private api:BlogServiceService){}

    @Get()
    async getMany(){
        const data = await this.api.getMany();
        return {data}
    }

    @Get(':id')
    async getById(@Param('id',ParseIntPipe) id:number){
        const data= await this.api.getById(id);
        return {data}
    }

    @Post(':id')
    async createBlog(@Body() dto: CreateBlogDto, @Param('id') id: number) {
        const data = await this.api.createOne(dto, id);
        return { message: 'Post created', data };
    }
    @Delete(':id')
async deleteBlog(@Param('id') id: number) {
    const result = await this.api.deleteBlog(id);
   return result
}
@Get('profile/:profileId')
async getBlogsByProfile(@Param('profileId') profileId: number) {
  const blogs = await this.api.getPostsByProfileId(profileId);
  return { message: 'Posts retrieved successfully', blogs };
}
    
}