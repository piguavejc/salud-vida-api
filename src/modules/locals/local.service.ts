import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PublicLocalInputDto } from 'src/modules/locals/dto/public-local-input.dto';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { Repository } from 'typeorm';

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

  async publicLocal(input: PublicLocalInputDto): Promise<LocalEntity> {
    const { id, isPublic } = input;
    const local = await this.getById(id);
    local.publicAt = isPublic ? new Date() : null;
    await this.repo.save(local);
    return local;
  }
}
