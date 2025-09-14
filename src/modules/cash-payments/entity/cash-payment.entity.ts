import { Entity, ManyToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@ObjectType('CashPayment')
@Entity('cash_payments')
export class CashPaymentEntity extends CommonEntity {
  @PriceColumn()
  mount: string;

  @UuidColumn()
  userId: string;

  @UuidColumn()
  localId: string;

  @UuidColumn()
  tenantId: string;

  @ManyToOne(() => UserEntity, (user) => user.cashPayments)
  user: UserEntity;

  @ManyToOne(() => LocalEntity, (local) => local.cashPayments)
  local: LocalEntity;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.cashPayments)
  tenant: TenantEntity;
}
