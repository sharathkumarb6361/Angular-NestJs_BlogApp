import { IsString, IsNotEmpty, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { CreateProfileDTO } from 'src/profile/dto/createprofile.dto';

export class CreateBlogDto {
  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  image: string;

  @IsNotEmpty()
  @IsString()
  blog: string;

  @IsNotEmpty()
  @ValidateNested()
  @Type(() => CreateProfileDTO)
  profile: CreateProfileDTO; 
}
