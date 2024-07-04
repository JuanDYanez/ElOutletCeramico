import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { Repository } from 'typeorm';
import { userErrors } from 'src/utils/constants/errors/errors.user';

@Injectable()
export class UsersServices {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  async getUsers(): Promise<{ success: boolean; users: User[] }> {
    const users = await this.userRepository.find();
    return { success: true, users };
  }

  async getUserProfile(id: number): Promise<{ success: boolean; user: User }> {
    const user = await this.userRepository.findOne({ where: { id } });

    if (!user) throw new NotFoundException(userErrors.NOT_FOUND);

    return { success: true, user };
  }
}
