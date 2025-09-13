import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CashPaymentEntity } from 'src/modules/cash-payments/entity/cash-payment.entity';
import { CashPaymentService } from 'src/modules/cash-payments/services/cash-payment.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([CashPaymentEntity])],
      services: [CashPaymentService],
      resolvers: [
        createCustomResolver({
          DTOClass: CashPaymentEntity,
          EntityClass: CashPaymentEntity,
          ServiceClass: CashPaymentService,
        }),
      ],
    }),
  ],
  providers: [CashPaymentService],
  exports: [CashPaymentService],
})
export class CashPaymentModule {}
