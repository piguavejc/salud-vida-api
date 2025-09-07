import { AppController } from './app.controller';
import { AppService } from './app.service';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfigModule } from 'src/shared/modules/graphql/graphql.module';
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Module } from '@nestjs/common';
import { envSchema } from 'src/config/config';
import { TypeOrmConfigModule } from 'src/shared/modules/typeorm/typeorm.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env.${process.env.NODE_ENV || 'development'}`,
      validate: (config) => envSchema.parse(config),
      isGlobal: true,
    }),
    TypeOrmConfigModule,
    GraphqlConfigModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
