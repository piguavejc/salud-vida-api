import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { LocalService } from 'src/modules/locals/local.service';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';
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
    @Args('input') input: TogglePublishedInputDTO,
  ): Promise<LocalEntity[]> {
    input.tenantId = user.tenantId;
    return this.service.publicLocal(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => LocalEntity)
  async updateOrderIndexById(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: UpdateOrderInputDTO,
  ): Promise<LocalEntity> {
    input.tenantId = user.tenantId;
    return this.service.updateOrderIndexById(input);
  }
}
