import { Module } from '@nestjs/common';
import { UsersServices } from './services/users.service';
import { UsersController } from './controllers/users.controller';

@Module({
  controllers: [UsersController],
  providers: [UsersServices],
})
export class UserModule {}
