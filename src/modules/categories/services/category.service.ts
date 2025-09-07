import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService extends TypeOrmQueryService<CategoryEntity> {
  constructor(
    @InjectRepository(CategoryEntity)
    repo: Repository<CategoryEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
