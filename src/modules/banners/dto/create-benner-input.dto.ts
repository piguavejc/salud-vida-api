import {
  BeforeCreateOne,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { IsOptional, IsUUID } from 'class-validator';

import { InputType } from '@nestjs/graphql';
import { UserContext } from 'src/shared/modules/context/auth.context';

@BeforeCreateOne(
  (input: CreateOneInputType<CreateBannerInputDto>, context: UserContext) => {
    input.input.tenantId = context.req.user.tenantId;
    return input;
  },
)
@InputType('CreateBannerInput')
export class CreateBannerInputDto {
  @IsUUID()
  @IsOptional()
  tenantId: string;
}
