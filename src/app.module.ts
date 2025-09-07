import { AppController } from './app.controller';
import { AppService } from './app.service';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfigModule } from 'src/shared/modules/graphql/graphql.module';
import { ImageModule } from 'src/modules/image/image.module';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Module } from '@nestjs/common';
import { RbacModule } from 'src/shared/modules/rbac/rbac.module';
import { TypeOrmConfigModule } from 'src/shared/modules/typeorm/typeorm.module';
import { UserModule } from 'src/modules/user/user.module';
import { envSchema } from 'src/config/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validate: (config) => envSchema.parse(config),
      isGlobal: true,
    }),
    TypeOrmConfigModule,
    GraphqlConfigModule,
    JwtModule,
    RbacModule,
    UserModule,
    ImageModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
