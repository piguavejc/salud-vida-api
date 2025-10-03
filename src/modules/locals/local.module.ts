import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { CrateLocalInputDto } from 'src/modules/locals/dto/create-local-input.dto';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { LocalService } from 'src/modules/locals/local.service';
import { LocalResolver } from 'src/modules/locals/resolver/local.resolver';
import { createCustomResolver } from 'src/shared/lib/util';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([LocalEntity]), JwtModule],
      services: [LocalService],
      resolvers: [
        createCustomResolver({
          CreateDTOClass: CrateLocalInputDto,
          UpdateDTOClass: CrateLocalInputDto,
          DTOClass: LocalEntity,
          EntityClass: LocalEntity,
          ServiceClass: LocalService,
        }),
      ],
    }),
  ],
  providers: [LocalService, LocalResolver],
  exports: [LocalService],
})
export class LocalModule {}
