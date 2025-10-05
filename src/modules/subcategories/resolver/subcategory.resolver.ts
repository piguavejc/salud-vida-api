import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { SubcategoryService } from 'src/modules/subcategories/services/subcategory.service';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';
import type { JwtPayload } from 'src/shared/modules/context/auth.context';
import { CurrentUser } from 'src/shared/modules/jwt/decorator/current-user';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';

@Resolver(() => SubcategoryEntity)
export class SubcategoryResolver {
  constructor(private readonly service: SubcategoryService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [SubcategoryEntity])
  toggleSubcategoryPublishedStatus(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: TogglePublishedInputDTO,
  ): Promise<SubcategoryEntity[]> {
    input.tenantId = user.tenantId;
    return this.service.toggleSubcategoryPublishedStatus(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => SubcategoryEntity)
  updateSubcategoryOrder(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: UpdateOrderInputDTO,
  ): Promise<SubcategoryEntity> {
    input.tenantId = user.tenantId;
    return this.service.updateSubcategoryOrder(input);
  }
}
