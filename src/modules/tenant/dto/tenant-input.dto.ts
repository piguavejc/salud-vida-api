import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

@InputType('TenantInput')
export class TenantInputDto {
  @Field()
  @IsEmail()
  email: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  fullNames: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  phone: string;
}
