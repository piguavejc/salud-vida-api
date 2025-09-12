import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderService extends TypeOrmQueryService<OrderEntity> {
  constructor(
    @InjectRepository(OrderEntity)
    repo: Repository<OrderEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
