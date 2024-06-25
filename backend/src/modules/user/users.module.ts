import { Module } from '@nestjs/common';
import { UsersServices } from './services/users.service';
import { UsersController } from './controllers/users.controller';
import { AuthController } from './controllers/auth.controller';
import { AuthService } from './services/auth.service';

@Module({
  controllers: [UsersController, AuthController],
  providers: [UsersServices, AuthService],
})
export class UserModule {}
