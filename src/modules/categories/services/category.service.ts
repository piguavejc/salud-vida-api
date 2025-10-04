import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryInputDTO } from 'src/modules/categories/dto/create-category-input.dto';
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

  async createOne(record: CreateCategoryInputDTO): Promise<CategoryEntity> {
    const count = await this.repo.count({
      where: { localId: record.localId, tenantId: record.tenantId },
    });
    return this.repo.save(
      this.repo.create({
        ...record,
        orderIndex: count + 1,
      }),
    );
  }
}
