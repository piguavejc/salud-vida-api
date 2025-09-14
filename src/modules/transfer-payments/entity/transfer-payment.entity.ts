import { Entity, ManyToOne, OneToOne } from 'typeorm';

import { ObjectType } from '@nestjs/graphql';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { PriceColumn } from 'src/shared/typeorm/columns/price-column';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@ObjectType('TransferPayment')
@Entity('transfer_payments')
export class TransferPaymentEntity extends CommonEntity {
  @PriceColumn()
  mount: string;

  @TextColumn()
  bankName: string;

  @UuidColumn()
  userId: string;

  @UuidColumn()
  imageId: string;

  @UuidColumn()
  localId: string;

  @ManyToOne(() => UserEntity, (user) => user.transferPayments)
  user: UserEntity;

  @OneToOne(() => ImageEntity, (image) => image.transferPayment)
  image: ImageEntity;

  @ManyToOne(() => LocalEntity, (local) => local.transferPayments)
  local: LocalEntity;
}
