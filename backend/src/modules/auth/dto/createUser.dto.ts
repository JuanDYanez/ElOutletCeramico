import {
  IsEmail,
  IsString,
  IsEnum,
  IsDate,
  IsInt,
  Matches,
  Length,
} from 'class-validator';
import { Gender, UserRole, IdentityType } from '../../user/entities/user.enum';

export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  @Length(8, 20, {
    message: 'La contraseña debe tener entre 8 y 20 caracteres.',
  })
  @Matches(/(?=.*[A-Z])/, {
    message: 'La contraseña debe contener al menos una letra mayúscula.',
  })
  @Matches(/(?=.*\d)/, {
    message: 'La contraseña debe contener al menos un número.',
  })
  password: string;

  @IsString()
  cellphone: string;

  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsString()
  address: string;

  @IsEnum(IdentityType)
  identityType: IdentityType;

  @IsInt()
  identityNumber: number;

  @IsEnum(Gender)
  gender: Gender;

  @IsDate()
  birthdate: Date;

  @IsEnum(UserRole)
  rol: UserRole;
}
