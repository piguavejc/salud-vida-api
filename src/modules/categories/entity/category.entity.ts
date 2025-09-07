import { Entity, ManyToOne } from 'typeorm';

import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { DateColumn } from 'src/shared/typeorm/columns/date-column';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { IntColumn } from 'src/shared/typeorm/columns/int-column';
import { ObjectType } from '@nestjs/graphql';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';

@ObjectType('Category')
@Entity('category')
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
}
