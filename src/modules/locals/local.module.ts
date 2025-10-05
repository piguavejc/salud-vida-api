import { CrateLocalInputDto } from 'src/modules/locals/dto/create-local-input.dto';
import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';
import { LocalEntity } from 'src/modules/locals/entity/local.entity';
import { LocalResolver } from 'src/modules/locals/resolver/local.resolver';
import { LocalService } from 'src/modules/locals/local.service';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { createCustomResolver } from 'src/shared/lib/util';

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
          guards: [JwtAuthGuard],
        }),
      ],
    }),
  ],
  providers: [LocalService, LocalResolver],
  exports: [LocalService],
})
export class LocalModule {}
