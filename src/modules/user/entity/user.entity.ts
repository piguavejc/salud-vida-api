import { Column, Entity } from 'typeorm';
import { IsEmail, IsEnum } from 'class-validator';

import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { Role } from 'src/shared/modules/rbac/enum/rbac.enum';

@Entity('users')
@ObjectType('User')
// @Authorize(createGenericAuthorizer(UserEntity))
export class UserEntity extends CommonEntity {
  @FilterableField(() => String)
  @IsEmail()
  @Column({ unique: true })
  email!: string;

  @FilterableField(() => Role)
  @IsEnum(Role)
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role!: Role;
}
