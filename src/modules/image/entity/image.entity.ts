import { Entity, OneToMany, OneToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { Provider } from 'src/modules/image/enums/image.enum';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { TransferPaymentEntity } from 'src/modules/transfer-payments/entity/transfer-payment.entity';
import { EnumColumn } from 'src/shared/typeorm/columns/enum.column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

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

  @OneToOne(
    () => TransferPaymentEntity,
    (transferPayment) => transferPayment.image,
  )
  transferPayment: TransferPaymentEntity;
}
