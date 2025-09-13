import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { Repository } from 'typeorm';

@Injectable()
export class BannerService extends TypeOrmQueryService<BannerEntity> {
  constructor(
    @InjectRepository(BannerEntity)
    repo: Repository<BannerEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
