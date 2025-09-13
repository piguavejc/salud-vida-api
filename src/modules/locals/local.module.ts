import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { LocalService } from 'src/modules/locals/local.service';
import { createCustomResolver } from 'src/shared/lib/util';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([LocalEntity]), JwtModule],
      services: [LocalService],
      resolvers: [
        createCustomResolver({
          DTOClass: LocalEntity,
          EntityClass: LocalEntity,
          ServiceClass: LocalService,
        }),
      ],
    }),
  ],
  providers: [LocalService],
  exports: [LocalService],
})
export class LocalModule {}
