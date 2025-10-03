import { Field, InputType } from '@nestjs/graphql';
import { IsBoolean, IsUUID } from 'class-validator';

@InputType('PublicLocalInput')
export class PublicLocalInputDto {
  @Field()
  @IsUUID()
  id!: string;

  @Field()
  @IsUUID()
  tenantId!: string;

  @Field()
  @IsBoolean()
  isPublic!: boolean;
}
