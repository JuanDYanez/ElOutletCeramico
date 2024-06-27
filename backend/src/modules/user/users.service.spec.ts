import { Test, TestingModule } from '@nestjs/testing';
import { UsersServices } from './users.service';

describe('UserService', () => {
  let service: UsersServices;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UsersServices],
    }).compile();

    service = module.get<UsersServices>(UsersServices);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
