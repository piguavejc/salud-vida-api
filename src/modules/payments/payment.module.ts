import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { PaymentEntity } from 'src/modules/payments/entity/payment.entity';
import { PaymentService } from 'src/modules/payments/services/payment.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([PaymentEntity])],
      services: [PaymentService],
      resolvers: [
        createCustomResolver({
          DTOClass: PaymentEntity,
          EntityClass: PaymentEntity,
          ServiceClass: PaymentService,
        }),
      ],
    }),
  ],
  providers: [PaymentService],
  exports: [PaymentService],
})
export class PaymentModule {}
