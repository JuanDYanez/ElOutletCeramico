import { Controller, Delete, Get, ParseIntPipe, Patch } from '@nestjs/common';
import { Param, UseGuards } from '@nestjs/common/decorators';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { ApiBearerAuth } from '@nestjs/swagger';

import { UsersServices } from '../services/users.service';
import { RolesGuard } from 'src/modules/auth/guards/roles/roles.guard';
import { Roles } from 'src/modules/auth/decorators/roles.decorator';
import { User } from '../entities/user.entity';
import { GetUser } from '../decorators/user.decorator';
import { RoleType, UserRoutes } from '../constants/user.constants';

@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller(UserRoutes.MAIN)
export class UsersController {
  constructor(private readonly userServices: UsersServices) {}

  @Get()
  @Roles(RoleType.ADMIN)
  async getUsers(): Promise<{ success: boolean; users: User[] }> {
    return this.userServices.getUsers();
  }

  @Get(UserRoutes.PROFILE.GET)
  async getUserProfile(
    @GetUser('id') userId: number,
  ): Promise<{ success: boolean; user: User }> {
    return this.userServices.getUserProfile(userId);
  }

  @Patch(UserRoutes.PROFILE.UPDATE)
  async updateUserProfile(@GetUser('id') userId: number) {}

  @Delete(':id')
  @Roles(RoleType.ADMIN)
  async softDeleteUser() {}

  @Patch(UserRoutes.PROFILE.RESTORE)
  @Roles(RoleType.ADMIN)
  async restoreUser() {}
}
