import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';
import { In, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class ProductService extends TypeOrmQueryService<ProductEntity> {
  constructor(
    @InjectRepository(ProductEntity)
    repo: Repository<ProductEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async toggleProductPublishedStatus(
    input: TogglePublishedInputDTO,
  ): Promise<ProductEntity[]> {
    const products = await this.repo.find({
      where: { id: In(input.ids), tenantId: input.tenantId },
    });

    await this.repo.update(
      { id: In(input.ids), tenantId: input.tenantId },
      { publicAt: input.published ? new Date() : null },
    );

    return products;
  }

  async updateProductOrder(input: UpdateOrderInputDTO): Promise<ProductEntity> {
    const { id, orderIndex, tenantId } = input;

    const products = await this.repo.findOne({
      where: { id, tenantId },
    });

    if (!products) {
      throw new Error('Subcategoría no encontrada');
    }

    const count = await this.repo.count({ where: { tenantId } });

    if (orderIndex > count) {
      throw new Error(
        `El índice de orden no puede ser mayor al número de productos existentes (${count})`,
      );
    }

    if (products.orderIndex < orderIndex) {
      await this.repo.update(
        {
          orderIndex: MoreThan(products.orderIndex),
          tenantId,
        },
        {
          orderIndex: () => '"order_index" - 1',
        },
      );
    }

    if (products.orderIndex > orderIndex) {
      await this.repo.update(
        {
          orderIndex: LessThan(products.orderIndex),
          tenantId,
        },
        {
          orderIndex: () => '"order_index" + 1',
        },
      );

      products.orderIndex = orderIndex;
      await this.repo.save(products);
    }
    return products;
  }
}
