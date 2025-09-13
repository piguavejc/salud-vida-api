import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrderItemEntity } from 'src/modules/order-items/entity/order-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class OrderItemService extends TypeOrmQueryService<OrderItemEntity> {
  constructor(
    @InjectRepository(OrderItemEntity)
    repo: Repository<OrderItemEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
