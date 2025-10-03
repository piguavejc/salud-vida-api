import { Field, InputType, Int } from '@nestjs/graphql';
import { IsInt, IsUUID } from 'class-validator';

@InputType('UpdateOrderIndexInput')
export class UpdateOrderIndexInputDto {
  @Field()
  @IsUUID()
  id: string;

  @Field(() => Int)
  @IsInt()
  orderIndex: number;

  @Field()
  @IsUUID()
  tenantId: string;
}
