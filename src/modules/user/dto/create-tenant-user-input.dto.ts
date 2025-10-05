import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsOptional, IsUUID } from 'class-validator';

@InputType('CreateTenantUserInput')
export class CreateTenantUserInputDto {
  @Field()
  @IsEmail()
  email: string;

  @IsUUID()
  @IsOptional()
  tenantId: string;
}
