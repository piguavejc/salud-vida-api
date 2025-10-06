import {
  BeforeCreateOne,
  CreateOneInputType,
} from '@nestjs-query/query-graphql';
import { Field, InputType, Int } from '@nestjs/graphql';
import {
  IsDecimal,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsPositive,
  IsString,
  IsUUID,
} from 'class-validator';

import { UserContext } from 'src/shared/modules/context/auth.context';

@BeforeCreateOne(
  (input: CreateOneInputType<CreateProductInputDto>, context: UserContext) => {
    input.input.tenantId = context.req.user.tenantId;
    return input;
  },
)
@InputType('CreateProductInput')
export class CreateProductInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field(() => String, { nullable: true })
  @IsString()
  @IsNotEmpty()
  @IsOptional()
  description?: string | null;

  @Field(() => Int)
  @IsInt()
  @IsPositive()
  stock: number;

  @Field(() => String)
  @IsDecimal()
  price: string;

  @Field()
  @IsUUID()
  imageId: string;

  @Field()
  @IsUUID()
  categoryId: string;

  @Field()
  @IsUUID()
  subcategoryId: string;

  @Field()
  @IsUUID()
  localId: string;

  @IsUUID()
  @IsOptional()
  tenantId: string;
}
