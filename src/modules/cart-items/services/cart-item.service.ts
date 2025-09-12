import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartItemService extends TypeOrmQueryService<CartItemEntity> {
  constructor(
    @InjectRepository(CartItemEntity)
    repo: Repository<CartItemEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
