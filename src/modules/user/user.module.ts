import { JwtModule } from 'src/shared/modules/jwt/jwt.module';
import { Module } from '@nestjs/common';
import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UserService } from 'src/modules/user/user.service';
import { createCustomResolver } from 'src/shared/lib/util';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([UserEntity]), JwtModule],
      services: [UserService],
      resolvers: [
        createCustomResolver({
          DTOClass: UserEntity,
          EntityClass: UserEntity,
          ServiceClass: UserService,
        }),
      ],
    }),
  ],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
