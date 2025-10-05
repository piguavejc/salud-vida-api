import { Entity, ManyToOne, OneToOne } from 'typeorm';

import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { ObjectType } from '@nestjs/graphql';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Subcategory')
@Entity('subcategories')
export class SubcategoryEntity extends CommonEntity {
  @TextColumn()
  name: string;

  @TextColumn({ nullable: true })
  description?: string | null;

  @IntColumn()
  orderIndex: number;

  @DateColumn({ nullable: true })
  publicAt: Date | null;

  @UuidColumn()
  localId: string;

  @UuidColumn()
  categoryId: string;

  @UuidColumn()
  tenantId: string;

  @ManyToOne(() => CategoryEntity, (category) => category.subcategories)
  category: CategoryEntity;

  @ManyToOne(() => ProductEntity, (product) => product.subcategories)
  product: ProductEntity;

  @ManyToOne(() => LocalEntity, (local) => local.subcategories)
  local: LocalEntity;

  @OneToOne(() => BannerEntity, (banner) => banner.subcategory)
  banner: BannerEntity;

  @ManyToOne(() => TenantEntity, (tenant) => tenant.subcategories)
  tenant: TenantEntity;
}
