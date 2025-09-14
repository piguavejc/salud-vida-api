import { Entity, ManyToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@ObjectType('Payment')
@Entity('payments')
export class PaymentEntity extends CommonEntity {
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

  @ManyToOne(() => UserEntity, (user) => user.payments)
  user: UserEntity;

  @ManyToOne(() => BillingEntity, (billing) => billing.payments)
  billing: BillingEntity;

  @ManyToOne(() => AddressEntity, (address) => address.payments)
  address: AddressEntity;

  @ManyToOne(() => LocalEntity, (local) => local.payments)
  local: LocalEntity;
}
