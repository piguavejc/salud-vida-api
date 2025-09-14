import { Entity, ManyToOne, OneToMany, OneToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

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

  @UuidColumn()
  localId: string;

  @UuidColumn()
  tenantId: string;

  @DateColumn({ nullable: true })
  publicAt: Date | null;

  @ManyToOne(() => ImageEntity, (image) => image.categories)
  image: ImageEntity;

  @OneToMany(() => SubcategoryEntity, (subcategory) => subcategory.category)
  subcategories: SubcategoryEntity[];

  @ManyToOne(() => ProductEntity, (product) => product.categories)
  product: ProductEntity;

  @ManyToOne(() => LocalEntity, (local) => local.categories)
  local: LocalEntity;

  @OneToOne(() => BannerEntity, (banner) => banner.category)
  banner: BannerEntity;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.categories)
  tenant: TenantEntity;
}
