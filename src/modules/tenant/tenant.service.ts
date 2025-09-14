import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TenantService extends TypeOrmQueryService<TenantEntity> {
  constructor(
    @InjectRepository(TenantEntity)
    repo: Repository<TenantEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
