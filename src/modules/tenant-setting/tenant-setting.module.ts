import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { TenantSettingEntity } from 'src/modules/tenant-setting/entity/tenant-setting.entity';
import { TenantSettingService } from 'src/modules/tenant-setting/tenant-setting.service';
import { createCustomResolver } from 'src/shared/lib/util';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([TenantSettingEntity]),
        JwtModule,
      ],
      services: [TenantSettingService],
      resolvers: [
        createCustomResolver({
          DTOClass: TenantSettingEntity,
          EntityClass: TenantSettingEntity,
          ServiceClass: TenantSettingService,
        }),
      ],
    }),
  ],
  providers: [TenantSettingService],
  exports: [TenantSettingService],
})
export class TenantSettingModule {}
