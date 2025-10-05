import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsOptional, IsUUID } from 'class-validator';

@InputType('UpdateOrderIndexInput')
export class UpdateOrderIndexInputDto {
  @Field()
  @IsUUID()
  id: string;

  @Field(() => Int)
  @IsInt()
  orderIndex: number;

  @IsUUID()
  @IsOptional()
  tenantId: string;
}
