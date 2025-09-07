import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ProductEntity } from 'src/modules/products/entity/products.entity';
import { ProductService } from 'src/modules/products/services/products.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProductEntity])],
      services: [ProductService],
      resolvers: [
        createCustomResolver({
          DTOClass: ProductEntity,
          EntityClass: ProductEntity,
          ServiceClass: ProductService,
        }),
      ],
    }),
  ],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
