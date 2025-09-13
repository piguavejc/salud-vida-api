import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { TransferPaymentEntity } from 'src/modules/transfer-payments/entity/transfer-payment.entity';
import { TransferPaymentService } from 'src/modules/transfer-payments/services/transfer-payment.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([TransferPaymentEntity])],
      services: [TransferPaymentService],
      resolvers: [
        createCustomResolver({
          DTOClass: TransferPaymentEntity,
          EntityClass: TransferPaymentEntity,
          ServiceClass: TransferPaymentService,
        }),
      ],
    }),
  ],
  providers: [TransferPaymentService],
  exports: [TransferPaymentService],
})
export class TransferPaymentModule {}
