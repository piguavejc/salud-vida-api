import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { BannerService } from 'src/modules/banners/services/banner.service';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';
import type { JwtPayload } from 'src/shared/modules/context/auth.context';
import { CurrentUser } from 'src/shared/modules/jwt/decorator/current-user';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';

@Resolver(() => BannerEntity)
export class BannerResolver {
  constructor(private readonly service: BannerService) {}

  @UseGuards(JwtAuthGuard)
  @Mutation(() => [BannerEntity])
  async toggleCategoryPublishedStatus(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: TogglePublishedInputDTO,
  ): Promise<BannerEntity[]> {
    input.tenantId = user.tenantId;
    return await this.service.toggleProductPublishedStatus(input);
  }

  @UseGuards(JwtAuthGuard)
  @Mutation(() => BannerEntity)
  async updateCategoryOrder(
    @CurrentUser() user: JwtPayload,
    @Args('input') input: UpdateOrderInputDTO,
  ): Promise<BannerEntity> {
    input.tenantId = user.tenantId;
    return await this.service.updateProductOrder(input);
  }
}
