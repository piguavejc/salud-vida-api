import { Entity, ManyToOne } from 'typeorm';

import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { ObjectType } from '@nestjs/graphql';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';

@ObjectType('Subcategory')
@Entity('subcategory')
export class SubcategoryEntity extends CommonEntity {
  @TextColumn()
  name: string;

  @TextColumn({ nullable: true })
  description?: string | null;

  @IntColumn()
  orderIndex: number;

  @DateColumn({ nullable: true })
  publicAt: Date | null;

  @ManyToOne(() => CategoryEntity, (category) => category.subcategories)
  category: CategoryEntity;
}
