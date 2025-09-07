import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { ProfileEntity } from 'src/modules/profiles/entity/profile.entity';
import { ProfileService } from 'src/modules/profiles/services/profile.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([ProfileEntity])],
      services: [ProfileService],
      resolvers: [
        createCustomResolver({
          DTOClass: ProfileEntity,
          EntityClass: ProfileEntity,
          ServiceClass: ProfileService,
        }),
      ],
    }),
  ],
  providers: [ProfileService],
  exports: [ProfileService],
})
export class ProfileModule {}
