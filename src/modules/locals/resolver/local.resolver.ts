import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { PublicLocalInputDto } from 'src/modules/locals/dto/public-local-input.dto';
import { UpdateOrderIndexInputDto } from 'src/modules/locals/dto/update-order-index-input.dto';

import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { LocalService } from 'src/modules/locals/local.service';

@Resolver(() => LocalEntity)
export class LocalResolver {
  constructor(private readonly service: LocalService) {}

  @Mutation(() => [LocalEntity])
  async publicLocal(
    @Args('input') input: PublicLocalInputDto,
  ): Promise<LocalEntity[]> {
    return this.service.publicLocal(input);
  }

  @Mutation(() => LocalEntity)
  async updateOrderIndexById(
    @Args('input') input: UpdateOrderIndexInputDto,
  ): Promise<LocalEntity> {
    return this.service.updateOrderIndexById(input);
  }
}
