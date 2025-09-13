import { Entity, OneToMany } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { CashPaymentEntity } from 'src/modules/cash-payments/entity/cash-payment.entity';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { OrderItemEntity } from 'src/modules/order-items/entity/order-item.entity';
import { PaymentEntity } from 'src/modules/payments/entity/payment.entity';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { TransferPaymentEntity } from 'src/modules/transfer-payments/entity/transfer-payment.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@Entity('locals')
@ObjectType('Local')
// @Authorize(createGenericAuthorizer(UserEntity))
export class LocalEntity extends CommonEntity {
  @TextColumn()
  name!: string;

  @TextColumn()
  description!: string;

  @UuidColumn()
  imageId!: string;

  @OneToMany(() => CategoryEntity, (category) => category.local)
  categories: CategoryEntity[];

  @OneToMany(() => SubcategoryEntity, (subcategory) => subcategory.local)
  subcategories: SubcategoryEntity[];

  @OneToMany(() => ProductEntity, (product) => product.local)
  products: ProductEntity[];

  @OneToMany(() => CartEntity, (cart) => cart.local)
  carts: CartEntity[];

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.local)
  cartItems: CartItemEntity[];

  @OneToMany(() => OrderEntity, (order) => order.local)
  orders: OrderEntity[];

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.local)
  orderItems: OrderItemEntity[];

  @OneToMany(() => PaymentEntity, (payment) => payment.local)
  payments: PaymentEntity[];

  @OneToMany(
    () => TransferPaymentEntity,
    (transferPayment) => transferPayment.local,
  )
  transferPayments: TransferPaymentEntity[];

  @OneToMany(() => CashPaymentEntity, (cashPayment) => cashPayment.local)
  cashPayments: CashPaymentEntity[];
}
