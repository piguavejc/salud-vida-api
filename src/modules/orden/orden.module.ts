import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { OrderEntity } from 'src/modules/orden/entity/order.entity';
import { OrderService } from 'src/modules/orden/services/order.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderEntity])],
      services: [OrderService],
      resolvers: [
        createCustomResolver({
          DTOClass: OrderEntity,
          EntityClass: OrderEntity,
          ServiceClass: OrderService,
        }),
      ],
    }),
  ],
  providers: [OrderService],
  exports: [OrderService],
})
export class OrderModule {}
