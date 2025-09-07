import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService extends TypeOrmQueryService<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity)
    repo: Repository<ProductEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
