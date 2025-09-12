import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { CartService } from 'src/modules/carts/services/cart.service';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CartEntity])],
      services: [CartService],
      resolvers: [
        createCustomResolver({
          DTOClass: CartEntity,
          EntityClass: CartEntity,
          ServiceClass: CartService,
        }),
      ],
    }),
  ],
  providers: [CartService],
  exports: [CartService],
})
export class CartModule {}
