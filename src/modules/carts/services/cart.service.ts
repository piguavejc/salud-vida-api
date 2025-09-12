import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CartService extends TypeOrmQueryService<CartEntity> {
  constructor(
    @InjectRepository(CartEntity)
    repo: Repository<CartEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
