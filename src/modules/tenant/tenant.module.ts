import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { TenantInputDto } from 'src/modules/tenant/dto/tenant-input.dto';
import { TenantEntity } from 'src/modules/tenant/entity/tenant.entity';
import { TenantService } from 'src/modules/tenant/tenant.service';
import { UserModule } from 'src/modules/user/user.module';
import { createCustomResolver } from 'src/shared/lib/util';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([TenantEntity]),
        UserModule,
        JwtModule,
      ],
      services: [TenantService],
      resolvers: [
        createCustomResolver({
          CreateDTOClass: TenantInputDto,
          UpdateDTOClass: TenantInputDto,
          DTOClass: TenantEntity,
          EntityClass: TenantEntity,
          ServiceClass: TenantService,
        }),
      ],
    }),
  ],
  providers: [TenantService],
  exports: [TenantService],
})
export class TenantModule {}
