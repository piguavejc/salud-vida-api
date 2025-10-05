import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCategoryInputDTO } from 'src/modules/categories/dto/create-category-input.dto';
import { TogglePublishedInputDTO } from 'src/modules/categories/dto/toggle-published-intput.dto';
import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { In, Repository } from 'typeorm';

@Injectable()
export class CategoryService extends TypeOrmQueryService<CategoryEntity> {
  constructor(
    @InjectRepository(CategoryEntity)
    repo: Repository<CategoryEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async verifyCategoryNameByLocalId(
    name: string,
    localId: string,
    tenantId: string,
  ): Promise<boolean> {
    const category = await this.repo.findOne({
      where: { name, localId, tenantId },
    });
    return category !== null && category !== undefined;
  }

  async createOne(record: CreateCategoryInputDTO): Promise<CategoryEntity> {
    const result = await this.verifyCategoryNameByLocalId(
      record.name,
      record.localId,
      record.tenantId,
    );

    if (result) {
      throw new Error(
        `El nombre de la categoría ya existe para este local (${record.name})`,
      );
    }
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

  async toggleCategoryPublishedStatus(
    input: TogglePublishedInputDTO,
  ): Promise<CategoryEntity[]> {
    const { ids } = input;

    const categories = await this.repo.find({
      where: { id: In(ids), tenantId: input.tenantId },
    });

    await this.repo.update(
      { id: In(ids), tenantId: input.tenantId },
      { publicAt: input.published ? new Date() : null },
    );

    return categories;
  }
}
