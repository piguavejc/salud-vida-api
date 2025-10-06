import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { TogglePublishedInputDTO } from 'src/shared/input.dto/toggle-published-intput.dto';
import { UpdateOrderInputDTO } from 'src/shared/input.dto/update-order-input.dto';
import { In, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class BannerService extends TypeOrmQueryService<BannerEntity> {
  constructor(
    @InjectRepository(BannerEntity)
    repo: Repository<BannerEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async toggleProductPublishedStatus(
    input: TogglePublishedInputDTO,
  ): Promise<BannerEntity[]> {
    const banners = await this.repo.find({
      where: { id: In(input.ids), tenantId: input.tenantId },
    });

    await this.repo.update(
      { id: In(input.ids), tenantId: input.tenantId },
      { publicAt: input.published ? new Date() : null },
    );

    return banners;
  }

  async updateProductOrder(input: UpdateOrderInputDTO): Promise<BannerEntity> {
    const { id, orderIndex, tenantId } = input;

    const banners = await this.repo.findOne({
      where: { id, tenantId },
    });

    if (!banners) {
      throw new Error('Subcategoría no encontrada');
    }

    const count = await this.repo.count({ where: { tenantId } });

    if (orderIndex > count) {
      throw new Error(
        `El índice de orden no puede ser mayor al número de banners existentes (${count})`,
      );
    }

    if (banners.orderIndex < orderIndex) {
      await this.repo.update(
        {
          orderIndex: MoreThan(banners.orderIndex),
          tenantId,
        },
        {
          orderIndex: () => '"order_index" - 1',
        },
      );
    }

    if (banners.orderIndex > orderIndex) {
      await this.repo.update(
        {
          orderIndex: LessThan(banners.orderIndex),
          tenantId,
        },
        {
          orderIndex: () => '"order_index" + 1',
        },
      );

      banners.orderIndex = orderIndex;
      await this.repo.save(banners);
    }
    return banners;
  }
}
