import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { CreateUserDto } from '../dto/createUser.dto';
import { ValidateUserDto } from '../dto/validateUser.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { authErrors } from 'src/utils/constants/errors/errors.auth';
import { auth } from 'src/utils/constants/messages/auth/auth.messages.ts';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: auth.USER_REGISTERED,
  })
  @ApiResponse({
    status: HttpStatus.BAD_REQUEST,
    description: authErrors.BAD_REQUEST,
  })
  registerUser(@Body() userObject: CreateUserDto) {
    return this.authService.registerUser(userObject);
  }

  @Post('login')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({ status: HttpStatus.OK, description: auth.USER_LOGGED })
  @ApiResponse({
    status: HttpStatus.UNAUTHORIZED,
    description: authErrors.INVALID_CREDENTIALS,
  })
  loginUser(@Body() userObject: ValidateUserDto) {
    return this.authService.login(userObject);
  }
}
