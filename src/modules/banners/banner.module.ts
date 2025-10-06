import { BannerEntity } from 'src/modules/banners/entity/banner.entity';
import { BannerService } from 'src/modules/banners/services/banner.service';
import { CreateBannerInputDto } from 'src/modules/banners/dto/create-benner-input.dto';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BannerEntity])],
      services: [BannerService],
      resolvers: [
        createCustomResolver({
          CreateDTOClass: CreateBannerInputDto,
          UpdateDTOClass: CreateBannerInputDto,
          DTOClass: BannerEntity,
          EntityClass: BannerEntity,
          ServiceClass: BannerService,
          guards: [JwtAuthGuard],
        }),
      ],
    }),
  ],
  providers: [BannerService],
  exports: [BannerService],
})
export class BannerModule {}
