import { IsEnum, IsOptional, IsString, Length } from 'class-validator';
import { Gender } from '../entities/user.enum';

export class UpdateUserDto {
  @IsOptional()
  @IsString()
  @Length(10, 15)
  cellphone?: string;

  @IsOptional()
  @IsString()
  @Length(5, 100)
  address?: string;

  @IsOptional()
  @IsEnum(Gender)
  gender?: Gender;
}
