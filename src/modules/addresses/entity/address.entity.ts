import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { ObjectType } from '@nestjs/graphql';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Address')
@Entity('addresses')
export class AddressEntity extends CommonEntity {
  @TextColumn()
  detail: string;

  @TextColumn()
  reference: string;

  @UuidColumn()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.addresses)
  user: UserEntity;

  @OneToMany(() => OrderEntity, (order) => order.address)
  orders: OrderEntity[];
}
