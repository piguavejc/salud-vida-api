import {
  BeforeCreateOne,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { UserContext } from 'src/shared/modules/context/auth.context';

@BeforeCreateOne(
  (input: CreateOneInputType<CrateLocalInputDto>, context: UserContext) => {
    input.input.tenantId = context.req.user.tenantId;
    return input;
  },
)
@InputType('CreateLocalInput')
export class CrateLocalInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  description!: string;

  @Field()
  @IsUUID()
  imageId!: string;

  @IsUUID()
  @IsOptional()
  tenantId!: string;
}
