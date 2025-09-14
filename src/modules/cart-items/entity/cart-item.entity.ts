import { Entity, ManyToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

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

  @UuidColumn()
  localId: string;

  @ManyToOne(() => CartEntity, (cart) => cart.cartItems)
  cart: CartEntity;

  @ManyToOne(() => ProductEntity, (product) => product.cartItems)
  product: ProductEntity;

  @ManyToOne(() => UserEntity, (user) => user.cartItems)
  user: UserEntity;

  @ManyToOne(() => LocalEntity, (local) => local.cartItems)
  local: LocalEntity;
}
