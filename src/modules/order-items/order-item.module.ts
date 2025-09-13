import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { OrderItemEntity } from 'src/modules/order-items/entity/order-item.entity';
import { OrderItemService } from 'src/modules/order-items/services/order-item.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([OrderItemEntity])],
      services: [OrderItemService],
      resolvers: [
        createCustomResolver({
          DTOClass: OrderItemEntity,
          EntityClass: OrderItemEntity,
          ServiceClass: OrderItemService,
        }),
      ],
    }),
  ],
  providers: [OrderItemService],
  exports: [OrderItemService],
})
export class OrderItemModule {}
