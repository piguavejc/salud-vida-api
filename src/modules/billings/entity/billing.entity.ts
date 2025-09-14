import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { PaymentEntity } from 'src/modules/payments/entity/payment.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

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

  @UuidColumn()
  tenantId: string;

  @ManyToOne(() => UserEntity, (user) => user.billings)
  user: UserEntity;

  @OneToMany(() => OrderEntity, (order) => order.billing)
  orders: OrderEntity[];

  @OneToMany(() => PaymentEntity, (payment) => payment.billing)
  payments: PaymentEntity[];

  @ManyToOne(() => TenantEntity, (tenant) => tenant.billings)
  tenant: TenantEntity;
}
