import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { BillingService } from 'src/modules/billings/services/billing.service';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([BillingEntity])],
      services: [BillingService],
      resolvers: [
        createCustomResolver({
          DTOClass: BillingEntity,
          EntityClass: BillingEntity,
          ServiceClass: BillingService,
        }),
      ],
    }),
  ],
  providers: [BillingService],
  exports: [BillingService],
})
export class BillingModule {}
