import { IsString, IsNotEmpty, IsNumber, IsEmail, IsDateString } from 'class-validator';

export class CreateProfileDTO {
  @IsNotEmpty()
  @IsNumber()
  profileid: number;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  regno: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  branch: string;

  @IsNotEmpty()
  @IsString()
  sem: string;

  @IsNotEmpty()
  @IsDateString()
  dob: Date;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  role:string;
}
