import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateTenantUserInputDto } from 'src/modules/user/dto/create-tenant-user-input.dto';
import { CreateUserInputDto } from 'src/modules/user/dto/create-user-input.dto';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { Role } from 'src/shared/modules/rbac/enum/rbac.enum';
import { Repository } from 'typeorm';

@Injectable()
export class UserService extends TypeOrmQueryService<UserEntity> {
  constructor(
    @InjectRepository(UserEntity)
    repo: Repository<UserEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async verifyEmail(email: string): Promise<void> {
    const user = await this.repo.findOne({ where: { email } });
    if (user) {
      throw new Error(
        `Ya existe un usuario con este correo electrónico: ${email}`,
      );
    }
  }

  async createUser(createUserInput: CreateUserInputDto): Promise<UserEntity> {
    await this.verifyEmail(createUserInput.email);
    const user = this.repo.create(createUserInput);
    await this.repo.save(user);
    return user;
  }

  async createTenantUser(
    createUserInput: CreateTenantUserInputDto,
  ): Promise<UserEntity> {
    await this.verifyEmail(createUserInput.email);
    const user = this.repo.create({
      ...createUserInput,
      role: Role.User,
    });
    await this.repo.save(user);
    return user;
  }

  async createTenantOperator(
    createUserInput: CreateTenantUserInputDto,
  ): Promise<UserEntity> {
    await this.verifyEmail(createUserInput.email);
    const user = this.repo.create({
      ...createUserInput,
      role: Role.Operator,
    });
    await this.repo.save(user);
    return user;
  }
}
