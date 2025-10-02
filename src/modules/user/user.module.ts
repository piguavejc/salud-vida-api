import { NestjsQueryGraphQLModule } from '@nestjs-query/query-graphql';
import { NestjsQueryTypeOrmModule } from '@nestjs-query/query-typeorm';
import { Module } from '@nestjs/common';
import { UserEntity } from 'src/modules/user/entity/user.entity';
import { UserResolver } from 'src/modules/user/resolver/user.resolver';
import { UserService } from 'src/modules/user/user.service';
import { createCustomResolver } from 'src/shared/lib/util';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';

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
  providers: [UserService, UserResolver],
  exports: [UserService],
})
export class UserModule {}
