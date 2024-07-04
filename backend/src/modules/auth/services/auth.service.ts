import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';

import { User } from '../../user/entities/user.entity';
import { CreateUserDto } from '../dto/createUser.dto';
import { ValidateUserDto } from '../dto/validateUser.dto';
import { authErrors } from 'src/utils/constants/errors/errors.auth';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
    private readonly jwtService: JwtService,
  ) {}

  async registerUser(userObject: CreateUserDto): Promise<{ success: boolean }> {
    const { password, email } = userObject;

    const existingUser = await this.userRepository.findOne({
      where: { email },
    });
    if (existingUser) {
      throw new HttpException(authErrors.EXISTS, HttpStatus.CONFLICT);
    }

    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = this.userRepository.create({
      ...userObject,
      password: hashedPassword,
    });
    await this.userRepository.save(newUser);
    return { success: true };
  }

  async login(
    userObject: ValidateUserDto,
  ): Promise<{ success: boolean; token: string; user: Partial<User> }> {
    const { email, password } = userObject;

    const user = await this.userRepository.findOne({ where: { email } });
    if (!user || !bcrypt.compareSync(password, user.password)) {
      throw new HttpException(
        authErrors.INVALID_CREDENTIALS,
        HttpStatus.UNAUTHORIZED,
      );
    }

    const token = this.generateToken(user);
    const userData = this.mapUserData(user);

    return { success: true, token, user: userData };
  }

  //Helpers
  private generateToken(user: User): string {
    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    return this.jwtService.sign(payload);
  }

  private mapUserData(user: User): Partial<User> {
    const {
      email,
      cellphone,
      firstname,
      lastname,
      address,
      identityType,
      identityNumber,
      gender,
      birthdate,
    } = user;
    return {
      email,
      cellphone,
      firstname,
      lastname,
      address,
      identityType,
      identityNumber,
      gender,
      birthdate,
    };
  }
}
