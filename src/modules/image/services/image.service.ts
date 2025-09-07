import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ImageService extends TypeOrmQueryService<ImageEntity> {
  constructor(
    @InjectRepository(ImageEntity)
    repo: Repository<ImageEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
