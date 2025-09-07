import { Entity, OneToMany } from 'typeorm';

import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { EnumColumn } from 'src/shared/typeorm/columns/enum.column';
import { ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { Provider } from 'src/modules/image/enums/image.enum';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';

@ObjectType('Image')
@Entity('images')
export class ImageEntity extends CommonEntity {
  @TextColumn()
  url: string;

  @TextColumn({ nullable: true })
  description?: string | null;

  @EnumColumn(Provider, { default: Provider.Cloudinary })
  provider: Provider;

  @OneToMany(() => CategoryEntity, (category) => category.image)
  categories: CategoryEntity[];

  @OneToMany(() => ProductEntity, (product) => product.image)
  products: ProductEntity[];
}
