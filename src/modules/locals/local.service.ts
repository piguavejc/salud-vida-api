import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
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
}
