import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateSubcategoryInputDto } from 'src/modules/subcategories/dto/create-subcategoryinput.dto';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';

import { In, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class SubcategoryService extends TypeOrmQueryService<SubcategoryEntity> {
  constructor(
    @InjectRepository(SubcategoryEntity)
    repo: Repository<SubcategoryEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async verifyName(name: string, tenantId: string): Promise<boolean> {
    const count = await this.repo.count({ where: { name, tenantId } });
    return count > 0;
  }

  async createOne(
    record: CreateSubcategoryInputDto,
  ): Promise<SubcategoryEntity> {
    const verify = await this.verifyName(record.name, record.tenantId);

    if (verify) {
      throw new Error(`El nombre ${record.name} ya existe`);
    }

    const count = await this.repo.count({
      where: { categoryId: record.categoryId, tenantId: record.tenantId },
    });
    const subcategory = this.repo.create({
      ...record,
      orderIndex: count + 1,
    });
    return await this.repo.save(subcategory);
  }

  async toggleSubcategoryPublishedStatus(
    input: TogglePublishedInputDTO,
  ): Promise<SubcategoryEntity[]> {
    const subcategories = await this.repo.find({
      where: { id: In(input.ids), tenantId: input.tenantId },
    });

    await this.repo.update(
      { id: In(input.ids), tenantId: input.tenantId },
      { publicAt: input.published ? new Date() : null },
    );

    return subcategories;
  }

  async updateSubcategoryOrder(
    input: UpdateOrderInputDTO,
  ): Promise<SubcategoryEntity> {
    const { id, orderIndex, tenantId } = input;

    const subcategory = await this.repo.findOne({
      where: { id, tenantId },
    });

    if (!subcategory) {
      throw new Error('Subcategoría no encontrada');
    }

    const count = await this.repo.count({ where: { tenantId } });

    if (orderIndex > count) {
      throw new Error(
        `El índice de orden no puede ser mayor al número de categorías existentes (${count})`,
      );
    }

    if (subcategory.orderIndex < orderIndex) {
      await this.repo.update(
        {
          orderIndex: MoreThan(subcategory.orderIndex),
          tenantId,
        },
        {
          orderIndex: () => '"order_index" - 1',
        },
      );
    }

    if (subcategory.orderIndex > orderIndex) {
      await this.repo.update(
        {
          orderIndex: LessThan(subcategory.orderIndex),
          tenantId,
        },
        {
          orderIndex: () => '"order_index" + 1',
        },
      );

      subcategory.orderIndex = orderIndex;
      await this.repo.save(subcategory);
    }

    return subcategory;
  }
}
