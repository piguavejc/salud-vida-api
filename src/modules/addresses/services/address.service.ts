import { TypeOrmQueryService } from '@nestjs-query/query-typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AddressService extends TypeOrmQueryService<AddressEntity> {
  constructor(
    @InjectRepository(AddressEntity)
    repo: Repository<AddressEntity>,
  ) {
    super(repo, { useSoftDelete: true });
  }
}
