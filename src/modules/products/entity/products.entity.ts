import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { ObjectType } from '@nestjs/graphql';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

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
}
