import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { BannerService } from 'src/modules/banners/services/banner.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BannerEntity])],
      services: [BannerService],
      resolvers: [
        createCustomResolver({
          DTOClass: BannerEntity,
          EntityClass: BannerEntity,
          ServiceClass: BannerService,
        }),
      ],
    }),
  ],
  providers: [BannerService],
  exports: [BannerService],
})
export class BannerModule {}
