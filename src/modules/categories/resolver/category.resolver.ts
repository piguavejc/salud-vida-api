import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';

import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CategoryService } from 'src/modules/categories/services/category.service';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';
import type { JwtPayload } from 'src/shared/modules/context/auth.context';
import { CurrentUser } from 'src/shared/modules/jwt/decorator/current-user';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';

@Resolver(() => CategoryEntity)
export class CategoryResolver {
  constructor(private readonly service: CategoryService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [CategoryEntity])
  async toggleCategoryPublishedStatus(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: TogglePublishedInputDTO,
  ): Promise<CategoryEntity[]> {
    input.tenantId = user.tenantId;
    return await this.service.toggleCategoryPublishedStatus(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => CategoryEntity)
  async updateCategoryOrder(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: UpdateOrderInputDTO,
  ): Promise<CategoryEntity> {
    input.tenantId = user.tenantId;
    return await this.service.updateCategoryOrder(input);
  }
}
