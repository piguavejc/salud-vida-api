import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

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

  @Field()
  @IsUUID()
  tenantId: string;

  @Field()
  @IsUUID()
  imageId: string;
}
