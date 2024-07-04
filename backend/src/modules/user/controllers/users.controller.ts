import { Controller, Delete, Get, Patch } from '@nestjs/common';
import { UsersServices } from '../services/users.service';
import { UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/modules/auth/guards/roles/roles.guard';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersServices) {}

  @Roles('admin')
  @Get()
  async getUsers() {
    return 'pato';
  }

  @Get(':id')
  async getUserProfile() {}

  @Patch(':id')
  async updateUserProfile() {}

  @Roles('admin')
  @Delete(':id')
  async softDeleteUser() {}

  @Roles('admin')
  @Patch('restore/:id')
  async restoreUser() {}
}
