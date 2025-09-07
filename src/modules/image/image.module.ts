import { ImageEntity } from 'src/modules/image/entity/image.entity';
import { ImageService } from 'src/modules/image/services/image.service';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ImageEntity])],
      services: [ImageService],
      resolvers: [
        createCustomResolver({
          DTOClass: ImageEntity,
          EntityClass: ImageEntity,
          ServiceClass: ImageService,
        }),
      ],
    }),
  ],
  providers: [ImageService],
  exports: [ImageService],
})
export class ImageModule {}
