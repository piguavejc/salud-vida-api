import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';

import { Repository } from 'typeorm';

@Injectable()
export class SubcategoryService extends TypeOrmQueryService<SubcategoryEntity> {
  constructor(
    @InjectRepository(SubcategoryEntity)
    repo: Repository<SubcategoryEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
