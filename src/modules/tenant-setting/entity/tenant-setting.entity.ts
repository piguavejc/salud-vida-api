import { Entity, JoinColumn, OneToOne } from 'typeorm';

import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { TextColumn } from 'src/shared/typeorm/columns/text-column';
import { UuidColumn } from 'src/shared/typeorm/columns/uuid-columnt';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';

@Entity('tenant_settings')
@ObjectType('TenantSetting')
// @Authorize(createGenericAuthorizer(UserEntity))
export class TenantSettingEntity extends CommonEntity {
  @FilterableField(() => String)
  @TextColumn()
  name!: string;

  @FilterableField(() => String)
  @TextColumn()
  androidVersion!: string;

  @FilterableField(() => String)
  @TextColumn()
  iosVersion!: string;

  @FilterableField(() => String)
  @TextColumn()
  color!: string;

  @UuidColumn()
  tenantId!: string;

  @UuidColumn()
  imageId!: string;

  @OneToOne(() => TenantEntity, (tenant) => tenant.tenantSetting)
  @JoinColumn({ name: 'tenant_id' })
  tenant: TenantEntity;

  @OneToOne(() => ImageEntity, (image) => image.tenantSetting)
  @JoinColumn({ name: 'image_id' })
  image: ImageEntity;
}
