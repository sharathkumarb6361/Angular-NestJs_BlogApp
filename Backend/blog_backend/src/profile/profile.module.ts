import { Module } from '@nestjs/common';
import { ProfileControllerController } from './profile-controller/profile-controller.controller';
import { ProfileServiceService } from './profile-service/profile-service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entites/profile.entity';


@Module({
  imports:[TypeOrmModule.forFeature([Profile])],
  controllers: [ProfileControllerController],
  providers: [ProfileServiceService]
})
export class ProfileModule {}
