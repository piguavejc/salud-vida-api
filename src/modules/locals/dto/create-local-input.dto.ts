import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

@InputType('CreateLocalInput')
export class CrateLocalInputDto {
  @Field()
  @IsString()
  @IsNotEmpty()
  name!: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  description!: string;

  @Field()
  @IsUUID()
  imageId!: string;

  @Field()
  @IsUUID()
  tenantId!: string;
}
