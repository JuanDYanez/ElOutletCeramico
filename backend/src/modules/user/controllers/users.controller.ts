import { Controller, Delete, Get, Patch } from '@nestjs/common';
import { UsersServices } from '../services/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersServices) {}

  @Get()
  async getUsers() {}

  @Get(':id')
  async getUserProfile() {}

  @Patch(':id')
  async updateUserProfile() {}

  @Delete(':id')
  async softDeleteUser() {}

  @Patch('restore/:id')
  async restoreUser() {}
}
