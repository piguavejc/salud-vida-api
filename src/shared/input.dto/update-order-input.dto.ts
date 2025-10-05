import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsOptional, IsUUID } from 'class-validator';

@InputType('UpdateOrderInput')
export class UpdateOrderInputDTO {
  @Field()
  @IsUUID()
  id: string;

  @IsUUID()
  @IsOptional()
  tenantId: string;

  @Field()
  @IsInt()
  orderIndex: number;
}
