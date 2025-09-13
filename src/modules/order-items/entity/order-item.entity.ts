import { Entity, ManyToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@ObjectType('OrderItems')
@Entity('order_items')
export class OrderItemEntity extends CommonEntity {
  @UuidColumn()
  orderId: string;

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

  @ManyToOne(() => OrderEntity, (cart) => cart.orderItems)
  order: OrderEntity;

  @ManyToOne(() => ProductEntity, (product) => product.orderItems)
  product: ProductEntity;

  @ManyToOne(() => UserEntity, (user) => user.orderItems)
  user: UserEntity;

  @ManyToOne(() => LocalEntity, (local) => local.orderItems)
  local: LocalEntity;
}
