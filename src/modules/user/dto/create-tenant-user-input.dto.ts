import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsUUID } from 'class-validator';

@InputType('CreateTenantUserInput')
export class CreateTenantUserInputDto {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => String)
  @IsUUID()
  tenantId: string;
}
