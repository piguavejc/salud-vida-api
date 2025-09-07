import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProfileEntity } from 'src/modules/profiles/entity/profile.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProfileService extends TypeOrmQueryService<ProfileEntity> {
  constructor(
    @InjectRepository(ProfileEntity)
    repo: Repository<ProfileEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
