import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { ValidateUserDto } from '../dto/validateUser.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  registerUser(@Body() userObject: CreateUserDto) {
    return this.authService.registerUser(userObject);
  }

  @Post('login')
  loginUser(@Body() userObject: ValidateUserDto) {
    return this.authService.login(userObject);
  }
}
