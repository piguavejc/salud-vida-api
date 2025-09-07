import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BillingService extends TypeOrmQueryService<BillingEntity> {
  constructor(
    @InjectRepository(BillingEntity)
    repo: Repository<BillingEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
