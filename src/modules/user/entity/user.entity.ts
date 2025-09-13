import { IsEmail, IsEnum } from 'class-validator';
import { Column, Entity, OneToMany } from 'typeorm';

import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { CashPaymentEntity } from 'src/modules/cash-payments/entity/cash-payment.entity';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { PaymentEntity } from 'src/modules/payments/entity/payment.entity';
import { ProfileEntity } from 'src/modules/profiles/entity/profile.entity';
import { TransferPaymentEntity } from 'src/modules/transfer-payments/entity/transfer-payment.entity';
import { Role } from 'src/shared/modules/rbac/enum/rbac.enum';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

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

  @OneToMany(() => ProfileEntity, (profile) => profile.user)
  profiles: ProfileEntity[];

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses: AddressEntity[];

  @OneToMany(() => BillingEntity, (billing) => billing.user)
  billings: BillingEntity[];

  @OneToMany(() => CartEntity, (cart) => cart.user)
  carts: CartEntity[];

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.user)
  cartItems: CartItemEntity[];

  @OneToMany(() => OrderEntity, (order) => order.user)
  orders: OrderEntity[];

  @OneToMany(() => OrderEntity, (order) => order.user)
  orderItems: OrderEntity[];

  @OneToMany(() => PaymentEntity, (payment) => payment.user)
  payments: PaymentEntity[];

  @OneToMany(() => CashPaymentEntity, (cashPayment) => cashPayment.user)
  cashPayments: CashPaymentEntity[];

  @OneToMany(
    () => TransferPaymentEntity,
    (transferPayment) => transferPayment.user,
  )
  transferPayments: TransferPaymentEntity[];
}
