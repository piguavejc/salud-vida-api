import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PublicLocalInputDto } from 'src/modules/locals/dto/public-local-input.dto';
import { UpdateOrderIndexInputDto } from 'src/modules/locals/dto/update-order-index-input.dto';

import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { LocalService } from 'src/modules/locals/local.service';
import type { JwtPayload } from 'src/shared/modules/context/auth.context';
import { CurrentUser } from 'src/shared/modules/jwt/decorator/current-user';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';

@Resolver(() => LocalEntity)
export class LocalResolver {
  constructor(private readonly service: LocalService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [LocalEntity])
  async publicLocal(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: PublicLocalInputDto,
  ): Promise<LocalEntity[]> {
    input.tenantId = user.tenantId;
    return this.service.publicLocal(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => LocalEntity)
  async updateOrderIndexById(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: UpdateOrderIndexInputDto,
  ): Promise<LocalEntity> {
    input.tenantId = user.tenantId;
    return this.service.updateOrderIndexById(input);
  }
}
