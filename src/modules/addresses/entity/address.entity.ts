import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { PaymentEntity } from 'src/modules/payments/entity/payment.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@ObjectType('Address')
@Entity('addresses')
export class AddressEntity extends CommonEntity {
  @TextColumn()
  detail: string;

  @TextColumn()
  reference: string;

  @UuidColumn()
  userId: string;

  @UuidColumn()
  tenantId: string;

  @ManyToOne(() => UserEntity, (user) => user.addresses)
  user: UserEntity;

  @OneToMany(() => OrderEntity, (order) => order.address)
  orders: OrderEntity[];

  @OneToMany(() => PaymentEntity, (payment) => payment.address)
  payments: PaymentEntity[];

  @ManyToOne(() => TenantEntity, (tenant) => tenant.addresses)
  tenant: TenantEntity;
}
