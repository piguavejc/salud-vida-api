import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantSettingEntity } from 'src/modules/tenant-setting/entity/tenant-setting.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantSettingService extends TypeOrmQueryService<TenantSettingEntity> {
  constructor(
    @InjectRepository(TenantSettingEntity)
    repo: Repository<TenantSettingEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
