import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { AddressService } from 'src/modules/addresses/services/address.service';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AddressEntity])],
      services: [AddressService],
      resolvers: [
        createCustomResolver({
          DTOClass: AddressEntity,
          EntityClass: AddressEntity,
          ServiceClass: AddressService,
        }),
      ],
    }),
  ],
  providers: [AddressService],
  exports: [AddressService],
})
export class AddressModule {}
