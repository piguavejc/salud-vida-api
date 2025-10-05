import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional, IsString, IsUUID } from 'class-validator';

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
  localid: string;

  @IsUUID()
  @IsOptional()
  tenantId: string;
}
