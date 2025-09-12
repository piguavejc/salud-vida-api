import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { ObjectType } from '@nestjs/graphql';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Cart')
@Entity('carts')
export class CartEntity extends CommonEntity {
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

  @UuidColumn()
  userId: string;

  @ManyToOne(() => UserEntity, (user) => user.carts)
  user: UserEntity;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
  cartItems: CartItemEntity[];
}
