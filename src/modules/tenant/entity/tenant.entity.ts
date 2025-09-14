import { Column, Entity } from 'typeorm';

import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@Entity('tenants')
@ObjectType('Tenant')
// @Authorize(createGenericAuthorizer(UserEntity))
export class TenantEntity extends CommonEntity {
  @FilterableField(() => String)
  @IsEmail()
  @Column({ unique: true })
  email!: string;
}
