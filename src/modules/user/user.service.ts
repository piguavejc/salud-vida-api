import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserInputDto } from 'src/modules/user/dto/create-user-input.dto';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmQueryService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    repo: Repository<UserEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async createUser(createUserInput: CreateUserInputDto): Promise<UserEntity> {
    const user = this.repo.create(createUserInput);
    await this.repo.save(user);
    return user;
  }
}
