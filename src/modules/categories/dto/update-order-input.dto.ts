import { Field, InputType } from '@nestjs/graphql';
import { IsInt, IsUUID } from 'class-validator';

@InputType('UpdateOrderInput')
export class UpdateOrderInputDTO {
  @Field()
  @IsUUID()
  id: string;

  @Field()
  @IsUUID()
  tenantId: string;

  @Field()
  @IsInt()
  orderIndex: number;
}
