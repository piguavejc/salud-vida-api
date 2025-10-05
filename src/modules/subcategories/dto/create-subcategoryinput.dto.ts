import {
  BeforeCreateOne,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { UserContext } from 'src/shared/modules/context/auth.context';

@BeforeCreateOne(
  (
    input: CreateOneInputType<CreateSubcategoryInputDto>,
    context: UserContext,
  ) => {
    input.input.tenantId = context.req.user.tenantId;
    return input;
  },
)
@InputType('CreateSubcategoryInput')
export class CreateSubcategoryInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  @IsOptional()
  description?: string;

  @Field()
  @IsUUID()
  categoryId: string;

  @Field()
  @IsUUID()
  localId: string;

  @IsUUID()
  @IsOptional()
  tenantId: string;
}
