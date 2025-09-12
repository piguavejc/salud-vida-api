import { Entity, ManyToOne } from 'typeorm';

import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { ObjectType } from '@nestjs/graphql';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Orden')
@Entity('orders')
export class OrderEntity extends CommonEntity {
  @PriceColumn()
  total: string;

  @PriceColumn()
  subtotal: string;

  @PriceColumn()
  taxFifteen: string;

  @PriceColumn()
  taxFive: string;

  @PriceColumn()
  taxZero: string;

  @TextColumn()
  addressReference: string;

  @TextColumn()
  addressDetail: string;

  @UuidColumn()
  userId: string;

  @UuidColumn()
  addressId: string;

  @UuidColumn()
  billingId: string;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @ManyToOne(() => BillingEntity, (billing) => billing.orders)
  billing: BillingEntity;

  @ManyToOne(() => AddressEntity, (address) => address.orders)
  address: AddressEntity;
}
