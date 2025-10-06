import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { ProductService } from 'src/modules/products/services/products.service';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';
import type { JwtPayload } from 'src/shared/modules/context/auth.context';
import { CurrentUser } from 'src/shared/modules/jwt/decorator/current-user';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';

@Resolver(() => ProductEntity)
export class ProductrResolver {
  constructor(private readonly service: ProductService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [ProductEntity])
  async toggleCategoryPublishedStatus(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: TogglePublishedInputDTO,
  ): Promise<ProductEntity[]> {
    input.tenantId = user.tenantId;
    return await this.service.toggleProductPublishedStatus(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => ProductEntity)
  async updateCategoryOrder(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: UpdateOrderInputDTO,
  ): Promise<ProductEntity> {
    input.tenantId = user.tenantId;
    return await this.service.updateProductOrder(input);
  }
}
