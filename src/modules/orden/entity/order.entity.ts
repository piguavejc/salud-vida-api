import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { OrderItemEntity } from 'src/modules/order-items/entity/order-item.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

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

  @UuidColumn()
  localId: string;

  @UuidColumn()
  tenantId: string;

  @ManyToOne(() => UserEntity, (user) => user.orders)
  user: UserEntity;

  @ManyToOne(() => BillingEntity, (billing) => billing.orders)
  billing: BillingEntity;

  @ManyToOne(() => AddressEntity, (address) => address.orders)
  address: AddressEntity;

  @OneToMany(() => OrderItemEntity, (order) => order.order)
  orderItems: OrderItemEntity[];

  @ManyToOne(() => LocalEntity, (local) => local.orders)
  local: LocalEntity;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.orders)
  tenant: TenantEntity;
}
