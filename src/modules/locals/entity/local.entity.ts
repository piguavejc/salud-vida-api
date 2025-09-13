import { ObjectType } from '@nestjs/graphql';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { Entity } from 'typeorm';

@Entity('locals')
@ObjectType('Local')
// @Authorize(createGenericAuthorizer(UserEntity))
export class LocalEntity extends CommonEntity {
  @TextColumn()
  name!: string;

  @TextColumn()
  description!: string;

  @UuidColumn()
  imageId!: string;
}
