import {
  BeforeCreateOne,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

import { UserContext } from 'src/shared/modules/context/auth.context';

@BeforeCreateOne(
  (input: CreateOneInputType<CreateCategoryInputDTO>, context: UserContext) => {
    input.input.tenantId = context.req.user.tenantId;
    return input;
  },
)
@InputType('CreateCategoryInput')
export class CreateCategoryInputDTO {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string | null;

  @Field()
  @IsUUID()
  localId: string;

  @IsUUID()
  @IsOptional()
  tenantId: string;

  @Field()
  @IsUUID()
  imageId: string;
}
