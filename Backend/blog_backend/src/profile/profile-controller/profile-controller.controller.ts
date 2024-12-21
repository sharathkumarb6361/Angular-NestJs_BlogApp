import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateProfileDTO } from '../dto/createprofile.dto';
import { ProfileServiceService } from '../profile-service/profile-service.service';
import { UpdateProfileDTO } from '../dto/updateprofile.dto';
import { Profile as ProfileEntity } from '../entites/profile.entity';


@Controller('profile-controller')
export class ProfileControllerController {
   constructor(private profileservice:ProfileServiceService){}
    @Post('register')
    async createProfile(@Body() dto:CreateProfileDTO){
        const data= await this.profileservice.createProfile({...dto})
        return data
    }
  
    @Get()
    async getMany(){
        return this.profileservice.getMany()
    }

    @Get(':id')
    async GetOne(@Param('id') id:string){
      const data=await this.profileservice.getOne(id)
      return {data}
    }

    @Put(':id')
    async updateOne(@Param('id') id:string,@Body() dto:UpdateProfileDTO){
        
        const data=await this.profileservice.editOne(id,dto);
        return {messege:"User edited",data}
    }

    @Delete(':id')
    async deleteOne(@Param('id') id:string){
        const data=await this.profileservice.deleteOne(id);
        return {message:"User Deleted",data}
    }
}
