import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { SubcategoryEntity } from 'src/modules/subcategories/entity/subcategory.entity';
import { SubcategoryService } from 'src/modules/subcategories/services/subcategory.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([SubcategoryEntity])],
      services: [SubcategoryService],
      resolvers: [
        createCustomResolver({
          DTOClass: SubcategoryEntity,
          EntityClass: SubcategoryEntity,
          ServiceClass: SubcategoryService,
        }),
      ],
    }),
  ],
  providers: [SubcategoryService],
  exports: [SubcategoryService],
})
export class SubcategoryModule {}
