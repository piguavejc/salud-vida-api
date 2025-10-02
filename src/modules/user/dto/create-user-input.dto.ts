import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsEnum, IsUUID } from 'class-validator';

import { Role } from 'src/shared/modules/rbac/enum/rbac.enum';

@InputType('CreateUserInput')
export class CreateUserInputDto {
  @Field()
  @IsEmail()
  email: string;

  @Field(() => Role)
  @IsEnum(Role)
  role: Role;

  @Field(() => String)
  @IsUUID()
  tenantId: string;
}
