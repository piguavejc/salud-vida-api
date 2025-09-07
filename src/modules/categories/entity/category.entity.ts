import { Entity, ManyToOne, OneToMany } from 'typeorm';

import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Category')
@Entity('categories')
export class CategoryEntity extends CommonEntity {
  @TextColumn()
  name: string;

  @TextColumn({ nullable: true })
  description?: string | null;

  @IntColumn()
  orderIndex: number;

  @UuidColumn()
  imageId: string;

  @DateColumn({ nullable: true })
  publicAt: Date | null;

  @ManyToOne(() => ImageEntity, (image) => image.categories)
  image: ImageEntity;

  @OneToMany(() => SubcategoryEntity, (subcategory) => subcategory.category)
  subcategories: SubcategoryEntity[];

  @ManyToOne(() => ProductEntity, (product) => product.categories)
  product: ProductEntity;
}
