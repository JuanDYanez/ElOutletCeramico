import { Controller } from '@nestjs/common';
import { UsersServices } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersServices) {}
}
