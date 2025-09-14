import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

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

  @UuidColumn()
  localId: string;

  @ManyToOne(() => UserEntity, (user) => user.carts)
  user: UserEntity;

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.cart)
  cartItems: CartItemEntity[];

  @ManyToOne(() => LocalEntity, (local) => local.carts)
  local: LocalEntity;
}
