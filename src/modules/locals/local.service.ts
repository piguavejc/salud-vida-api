import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicLocalInputDto } from 'src/modules/locals/dto/public-local-input.dto';
import { UpdateOrderIndexInputDto } from 'src/modules/locals/dto/update-order-index-input.dto';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { CreateLocalInput } from 'test/graphql/schema.types';
import { In, LessThan, MoreThan, Repository } from 'typeorm';

@Injectable()
export class LocalService extends TypeOrmQueryService<LocalEntity> {
  constructor(
    @InjectRepository(LocalEntity)
    repo: Repository<LocalEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }

  async getById(id: string): Promise<LocalEntity> {
    const local = await this.repo.findOne({ where: { id } });
    if (!local) {
      throw new Error('Local not found');
    }
    return local;
  }

  async createOne(record: CreateLocalInput): Promise<LocalEntity> {
    const result = await this.verifyName(record.name, record.tenantId);
    const count = await this.repo.count();

    if (result) {
      throw new Error(`Ya existe un local con este nombre: ${record.name}`);
    }

    const local = this.repo.create({ ...record, orderIndex: count + 1 });
    return await this.repo.save(local);
  }

  async updateOne(id: string, update: CreateLocalInput): Promise<LocalEntity> {
    const result = await this.verifyName(update.name, update.tenantId);
    if (result) {
      throw new Error(`Ya existe un local con este nombre: ${update.name}`);
    }
    await this.repo.update(id, update);
    return await this.getById(id);
  }

  async verifyName(name: string, tenantId: string): Promise<boolean> {
    const local = await this.repo.findOne({ where: { name, tenantId } });
    return local !== null && local !== undefined;
  }

  async publicLocal(input: PublicLocalInputDto): Promise<LocalEntity[]> {
    const { ids, isPublic } = input;

    await this.repo.update(ids, { publicAt: isPublic ? new Date() : null });

    return await this.repo.find({ where: { id: In(ids) } });
  }

  async updateOrderIndexById(
    input: UpdateOrderIndexInputDto,
  ): Promise<LocalEntity> {
    const { id, orderIndex, tenantId } = input;

    const local = await this.repo.findOne({ where: { id, tenantId } });
    const count = await this.repo.count();

    if (!local) {
      throw new Error('Local not found');
    }

    if (orderIndex > count) {
      throw new Error(
        `El valor de orderIndex excede el número de locales existentes (${count})`,
      );
    }

    if (local.orderIndex < orderIndex) {
      await this.repo.update(
        { orderIndex: MoreThan(local.orderIndex), tenantId },
        { orderIndex: () => '"orderIndex" - 1' },
      );
    }
    if (local.orderIndex > orderIndex) {
      await this.repo.update(
        { orderIndex: LessThan(local.orderIndex), tenantId },
        { orderIndex: () => '"orderIndex" + 1' },
      );
    }
    local.orderIndex = orderIndex;
    return await this.repo.save(local);
  }
}
