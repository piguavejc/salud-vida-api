import { CategoryEntity } from 'src/modules/categories/entity/category.entity';
import { CategoryResolver } from 'src/modules/categories/resolver/category.resolver';
import { CategoryService } from 'src/modules/categories/services/category.service';
import { CreateCategoryInputDTO } from 'src/modules/categories/dto/create-category-input.dto';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';
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
          CreateDTOClass: CreateCategoryInputDTO,
          UpdateDTOClass: CreateCategoryInputDTO,
          DTOClass: CategoryEntity,
          EntityClass: CategoryEntity,
          ServiceClass: CategoryService,
          guards: [JwtAuthGuard],
        }),
      ],
    }),
  ],
  providers: [CategoryService, CategoryResolver],
  exports: [CategoryService],
})
export class CategoryModule {}
