import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { Entity } from 'typeorm';
import { EnumColumn } from 'src/shared/typeorm/columns/enum.column';
import { ObjectType } from '@nestjs/graphql';
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
}
