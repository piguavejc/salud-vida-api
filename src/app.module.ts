import { AddressModule } from 'src/modules/addresses/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BillingModule } from 'src/modules/billings/billing.module';
import { CartItemModule } from 'src/modules/cart-items/cart-item.module';
import { CartModule } from 'src/modules/carts/cart.module';
import { CategoryModule } from 'src/modules/categories/category.module';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ConfigModule } from '@nestjs/config';
import { GraphqlConfigModule } from 'src/shared/modules/graphql/graphql.module';
import { ImageModule } from 'src/modules/image/image.module';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Module } from '@nestjs/common';
import { ProductModule } from 'src/modules/products/products.module';
import { ProfileModule } from 'src/modules/profiles/profile.module';
import { RbacModule } from 'src/shared/modules/rbac/rbac.module';
import { SubcategoryModule } from 'src/modules/subcategories/subcategory.module';
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
    CategoryModule,
    SubcategoryModule,
    ProductModule,
    ProfileModule,
    AddressModule,
    BillingModule,
    CartModule,
    CartItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
