import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CashPaymentEntity } from 'src/modules/cash-payments/entity/cash-payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CashPaymentService extends TypeOrmQueryService<CashPaymentEntity> {
  constructor(
    @InjectRepository(CashPaymentEntity)
    repo: Repository<CashPaymentEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
