import { CreateProductInputDto } from 'src/modules/products/dto/create-product-input.dto';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';
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
          CreateDTOClass: CreateProductInputDto,
          UpdateDTOClass: CreateProductInputDto,
          DTOClass: ProductEntity,
          EntityClass: ProductEntity,
          ServiceClass: ProductService,
          guards: [JwtAuthGuard],
        }),
      ],
    }),
  ],
  providers: [ProductService],
  exports: [ProductService],
})
export class ProductModule {}
