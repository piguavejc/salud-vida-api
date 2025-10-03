import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateTenantUserInputDto } from 'src/modules/user/dto/create-tenant-user-input.dto';

import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UserService } from 'src/modules/user/user.service';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @Mutation(() => UserEntity)
  async createTenantUser(
    @Args('input') input: CreateTenantUserInputDto,
  ): Promise<UserEntity> {
    return this.service.createTenantUser(input);
  }

  @Mutation(() => UserEntity)
  async createTenantOperator(
    @Args('input') input: CreateTenantUserInputDto,
  ): Promise<UserEntity> {
    return this.service.createTenantOperator(input);
  }
}
