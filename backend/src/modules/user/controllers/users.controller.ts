import { Controller, Delete, Get, ParseIntPipe, Patch } from '@nestjs/common';
import { UsersServices } from '../services/users.service';
import { Param, UseGuards, UsePipes } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';
import { RolesGuard } from 'src/modules/auth/guards/roles/roles.guard';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User } from '../entities/user.entity';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('users')
export class UsersController {
  constructor(private readonly userServices: UsersServices) {}

  @Roles('admin')
  @Get()
  async getUsers(): Promise<{ success: boolean; users: User[] }> {
    return this.userServices.getUsers();
  }

  @Get(':id')
  @UsePipes(new ParseIntPipe())
  async getUserProfile(
    @Param('id') id: number,
  ): Promise<{ success: boolean; user: User }> {
    return this.userServices.getUserProfile(id);
  }

  @Patch(':id')
  async updateUserProfile() {}

  @Roles('admin')
  @Delete(':id')
  async softDeleteUser() {}

  @Roles('admin')
  @Patch('restore/:id')
  async restoreUser() {}
}
