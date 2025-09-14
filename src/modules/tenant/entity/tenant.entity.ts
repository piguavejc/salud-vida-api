import { Column, Entity, OneToMany } from 'typeorm';

import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { IsEmail } from 'class-validator';
import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { CashPaymentEntity } from 'src/modules/cash-payments/entity/cash-payment.entity';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { OrderItemEntity } from 'src/modules/order-items/entity/order-item.entity';
import { PaymentEntity } from 'src/modules/payments/entity/payment.entity';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { ProfileEntity } from 'src/modules/profiles/entity/profile.entity';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { TransferPaymentEntity } from 'src/modules/transfer-payments/entity/transfer-payment.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@Entity('tenants')
@ObjectType('Tenant')
// @Authorize(createGenericAuthorizer(UserEntity))
export class TenantEntity extends CommonEntity {
  @FilterableField(() => String)
  @IsEmail()
  @Column({ unique: true })
  email!: string;

  @FilterableField(() => String)
  @TextColumn()
  fullNames!: string;

  @FilterableField(() => String)
  @TextColumn()
  phone!: string;

  @OneToMany(() => AddressEntity, (address) => address.tenant)
  addresses: AddressEntity[];

  @OneToMany(() => BannerEntity, (banner) => banner.tenant)
  banners: BannerEntity[];

  @OneToMany(() => BillingEntity, (billing) => billing.tenant)
  billings: BillingEntity[];

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.tenant)
  cartItems: CartItemEntity[];

  @OneToMany(() => CartEntity, (cart) => cart.tenant)
  carts: CartEntity[];

  @OneToMany(() => CashPaymentEntity, (cashPayment) => cashPayment.tenant)
  cashPayments: CashPaymentEntity[];

  @OneToMany(() => CategoryEntity, (category) => category.tenant)
  categories: CategoryEntity[];

  @OneToMany(() => ImageEntity, (image) => image.tenant)
  images: ImageEntity[];

  @OneToMany(() => LocalEntity, (local) => local.tenant)
  locals: LocalEntity[];

  @OneToMany(() => OrderEntity, (order) => order.tenant)
  orders: OrderEntity[];

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.tenant)
  orderItems: OrderItemEntity[];

  @OneToMany(() => PaymentEntity, (payment) => payment.tenant)
  payments: PaymentEntity[];

  @OneToMany(() => ProductEntity, (product) => product.tenant)
  products: ProductEntity[];

  @OneToMany(() => ProfileEntity, (profile) => profile.tenant)
  profiles: ProfileEntity[];

  @OneToMany(() => SubcategoryEntity, (subcategory) => subcategory.tenant)
  subcategories: SubcategoryEntity[];

  @OneToMany(
    () => TransferPaymentEntity,
    (transferPayment) => transferPayment.tenant,
  )
  transferPayments: TransferPaymentEntity[];

  @OneToMany(() => UserEntity, (user) => user.tenant)
  users: UserEntity[];
}
