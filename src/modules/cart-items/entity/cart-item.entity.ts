import { Entity, ManyToOne } from 'typeorm';

import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { ObjectType } from '@nestjs/graphql';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('CartItems')
@Entity('cart_items')
export class CartItemEntity extends CommonEntity {
  @UuidColumn()
  cartId: string;

  @UuidColumn()
  productId: string;

  @PriceColumn()
  price: string;

  @IntColumn()
  quantity: number;

  @PriceColumn()
  vatRate: string;

  @PriceColumn()
  taxFive: string;

  @PriceColumn()
  taxFifteen: string;

  @UuidColumn()
  userId: string;

  @ManyToOne(() => CartEntity, (cart) => cart.cartItems)
  cart: CartEntity;

  @ManyToOne(() => ProductEntity, (product) => product.cartItems)
  product: ProductEntity;

  @ManyToOne(() => UserEntity, (user) => user.cartItems)
  user: UserEntity;
}
