import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PaymentEntity } from 'src/modules/payments/entity/payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PaymentService extends TypeOrmQueryService<PaymentEntity> {
  constructor(
    @InjectRepository(PaymentEntity)
    repo: Repository<PaymentEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
