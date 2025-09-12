import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { ObjectType } from '@nestjs/graphql';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Billing')
@Entity('billings')
export class BillingEntity extends CommonEntity {
  @TextColumn()
  fullNames: string;

  @TextColumn()
  email: string;

  @TextColumn()
  addressDetail: string;

  @TextColumn()
  addressReference: string;

  @TextColumn()
  phone: string;

  @UuidColumn()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.billings)
  user: UserEntity;

  @OneToMany(() => OrderEntity, (order) => order.billing)
  orders: OrderEntity[];
}
