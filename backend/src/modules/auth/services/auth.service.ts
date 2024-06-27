import { Injectable, HttpException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as bcryptjs from 'bcryptjs';

import { User } from '../../user/entities/user.entity';
import { CreateUserDto } from '../dto/createUser.dto';
import { ValidateUserDto } from '../dto/validateUser.dto';
import { authErrors } from 'src/utils/errors/errors.auth';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) {}

  registerUser(userObject: CreateUserDto) {
    const { password } = userObject;
    const hashedPassword = bcryptjs.hashSync(password, 10);

    userObject = { ...userObject, password: hashedPassword };

    const newUser = this.userRepository.create(userObject);
    return this.userRepository.save(newUser);
  }

  async login(userObject: ValidateUserDto) {
    const { email, password } = userObject;
    const user = await this.userRepository.findOne({ where: { email } });
    if (!user || !bcryptjs.compareSync(password, user.password)) {
      throw new HttpException(authErrors.INVALID_CREDENTIALS, 403);
    }

    const payload = {
      id: user.id,
      email: user.email,
      role: user.role,
    };
    const token = this.jwtService.sign(payload);

    const userData = {
      email: user.email,
      cellphone: user.cellphone,
      firstname: user.firstname,
      lastname: user.lastname,
      address: user.address,
      identityType: user.identityType,
      identityNumber: user.identityNumber,
      gender: user.gender,
      birthdate: user.birthdate,
    };

    return { token, user: userData };
  }
}
