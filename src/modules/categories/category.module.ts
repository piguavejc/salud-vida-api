import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CategoryService } from 'src/modules/categories/services/category.service';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CategoryEntity])],
      services: [CategoryService],
      resolvers: [
        createCustomResolver({
          DTOClass: CategoryEntity,
          EntityClass: CategoryEntity,
          ServiceClass: CategoryService,
        }),
      ],
    }),
  ],
  providers: [CategoryService],
  exports: [CategoryService],
})
export class CategoryModule {}
