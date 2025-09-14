import { Entity, JoinColumn, ManyToOne, OneToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@ObjectType('Banner')
@Entity('banners')
export class BannerEntity extends CommonEntity {
  @TextColumn()
  name: string;

  @TextColumn({ nullable: true })
  description?: string | null;

  @IntColumn()
  orderIndex: number;

  @DateColumn({ nullable: true })
  publicAt: Date | null;

  @UuidColumn()
  imageId: string;

  @UuidColumn()
  localId: string;

  @UuidColumn()
  categoryId: string;

  @UuidColumn()
  subcategoryId: string;

  @UuidColumn()
  productId: string;

  @UuidColumn()
  tenantId: string;

  @OneToOne(() => LocalEntity, (local) => local.banner)
  @JoinColumn({ name: 'local_id' })
  local: LocalEntity;

  @OneToOne(() => ProductEntity, (local) => local.banner)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @OneToOne(() => CategoryEntity, (local) => local.banner)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToOne(() => SubcategoryEntity, (local) => local.banner)
  @JoinColumn({ name: 'subcategory_id' })
  subcategory: SubcategoryEntity;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.banners)
  tenant: TenantEntity;
}
