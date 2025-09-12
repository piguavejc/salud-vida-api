import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { CartItemService } from 'src/modules/cart-items/services/cart-item.service';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CartItemEntity])],
      services: [CartItemService],
      resolvers: [
        createCustomResolver({
          DTOClass: CartItemEntity,
          EntityClass: CartItemEntity,
          ServiceClass: CartItemService,
        }),
      ],
    }),
  ],
  providers: [CartItemService],
  exports: [CartItemService],
})
export class CartItemModule {}
