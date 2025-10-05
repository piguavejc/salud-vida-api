/* eslint-disable @typescript-eslint/no-unsafe-call */
import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { CreateTenantUserInputDto } from 'src/modules/user/dto/create-tenant-user-input.dto';

import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UserService } from 'src/modules/user/user.service';
import type { JwtPayload } from 'src/shared/modules/context/auth.context';
import { CurrentUser } from 'src/shared/modules/jwt/decorator/current-user';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';

@Resolver(() => UserEntity)
export class UserResolver {
  constructor(private readonly service: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserEntity)
  async createTenantUser(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: CreateTenantUserInputDto,
  ): Promise<UserEntity> {
    input.tenantId = user.tenantId;
    return this.service.createTenantUser(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserEntity)
  async createTenantOperator(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: CreateTenantUserInputDto,
  ): Promise<UserEntity> {
    input.tenantId = user.tenantId;
    return this.service.createTenantOperator(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => UserEntity)
  async createTenantDriver(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: CreateTenantUserInputDto,
  ): Promise<UserEntity> {
    input.tenantId = user.tenantId;
    return this.service.createTenantDriver(input);
  }
}
