import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createProfile } from 'src/utils/types';
import { Profile } from '../entites/profile.entity';
import { Repository } from 'typeorm';
import { CreateProfileDTO } from '../dto/createprofile.dto';
import { UpdateProfileDTO } from '../dto/updateprofile.dto';

@Injectable()
export class ProfileServiceService {
    constructor(@InjectRepository(Profile) private profileRepo:Repository<Profile>){}

     async getMany(){
        return await this.profileRepo.find()
     }


     async getOne(id:string,userEntity?:Profile){
        const user = await this.profileRepo.findOne({ where: { regno: id } }).then(u => (!userEntity ? u : !!u && userEntity.profileid=== u.profileid ? u : null));
  
      if (!user)
        throw new NotFoundException('User does not exists or unauthorized');
  
      return user;
  
       
     }

    async createProfile(dto:CreateProfileDTO){
      const ProfileExist= await this.profileRepo.findOne({ where: { regno: dto.regno } });
      if (ProfileExist)
        throw new BadRequestException('User already registered with regester number');
   
      const newProfile = this.profileRepo.create(dto)
      const Profile = this.profileRepo.save(newProfile)
      delete (await Profile).password
      return {message:"Profile created succsessfully", Profile}
    }


    async editOne(id:string,dto:UpdateProfileDTO,userEntity?:Profile){
        console.log(dto);
        const user = await this.getOne(id, userEntity);
        const editedUser = Object.assign(user, dto);
        return await this.profileRepo.save(editedUser);
    

    }
    async deleteOne(id: string, userEntity?: Profile) {
        const user = await this.getOne(id, userEntity);
        return await this.profileRepo.remove(user);
      }
    
    
}
