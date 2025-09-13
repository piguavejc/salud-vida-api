import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransferPaymentEntity } from 'src/modules/transfer-payments/entity/transfer-payment.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransferPaymentService extends TypeOrmQueryService<TransferPaymentEntity> {
  constructor(
    @InjectRepository(TransferPaymentEntity)
    repo: Repository<TransferPaymentEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
