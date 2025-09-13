import { Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { OrderItemEntity } from 'src/modules/order-items/entity/order-item.entity';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@ObjectType('Product')
@Entity('products')
export class ProductEntity extends CommonEntity {
  @TextColumn()
  name: string;

  @TextColumn({ nullable: true })
  description?: string | null;

  @IntColumn()
  orderIndex: number;

  @DateColumn({ nullable: true })
  publicAt: Date | null;

  @IntColumn()
  stock: number;

  @PriceColumn()
  price: string;

  @UuidColumn()
  imageId: string;

  @UuidColumn()
  subcategoryId: string;

  @UuidColumn()
  categoryId: string;

  @ManyToOne(() => ImageEntity, (image) => image.products)
  image: ImageEntity;

  @OneToMany(() => SubcategoryEntity, (subcategory) => subcategory.product)
  subcategories: SubcategoryEntity[];

  @OneToMany(() => CategoryEntity, (category) => category.product)
  categories: CategoryEntity[];

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.product)
  cartItems: CartItemEntity[];

  @OneToMany(() => OrderItemEntity, (orderItem) => orderItem.product)
  orderItems: OrderItemEntity[];

  @ManyToOne(() => LocalEntity, (local) => local.products)
  local: LocalEntity;

  @OneToOne(() => BannerEntity, (banner) => banner.product)
  banner: BannerEntity;
}
