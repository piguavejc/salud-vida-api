import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { TogglePublishedInputDTO } from 'src/modules/categories/dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/modules/categories/dto/update-order-input.dto';

import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CategoryService } from 'src/modules/categories/services/category.service';

@Resolver(() => CategoryEntity)
export class CategoryResolver {
  constructor(private readonly service: CategoryService) {}

  @Mutation(() => [CategoryEntity])
  async toggleCategoryPublishedStatus(
    @Args('input') input: TogglePublishedInputDTO,
  ): Promise<CategoryEntity[]> {
    return await this.service.toggleCategoryPublishedStatus(input);
  }

  @Mutation(() => CategoryEntity)
  async updateCategoryOrder(
    @Args('input') input: UpdateOrderInputDTO,
  ): Promise<CategoryEntity> {
    return await this.service.updateCategoryOrder(input);
  }
}
