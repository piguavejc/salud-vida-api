import { AddressModule } from 'src/modules/addresses/address.module';
import { BannerModule } from 'src/modules/banners/banner.module';
import { BillingModule } from 'src/modules/billings/billing.module';
import { CartItemModule } from 'src/modules/cart-items/cart-item.module';
import { CartModule } from 'src/modules/carts/cart.module';
import { CashPaymentModule } from 'src/modules/cash-payments/cash-payment.module';
import { CategoryModule } from 'src/modules/categories/category.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
import { ConfigModule } from '@nestjs/config';
import { ImageModule } from 'src/modules/image/image.module';
import { LocalModule } from 'src/modules/locals/local.module';
import { GraphqlConfigModule } from 'src/shared/modules/graphql/graphql.module';
import { JwtModule } from 'src/shared/modules/jwt/jwt.module';
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { Module } from '@nestjs/common';
import { envSchema } from 'src/config/config';
import { OrderModule } from 'src/modules/orden/orden.module';
import { OrderItemModule } from 'src/modules/order-items/order-item.module';
import { PaymentModule } from 'src/modules/payments/payment.module';
import { ProductModule } from 'src/modules/products/products.module';
import { ProfileModule } from 'src/modules/profiles/profile.module';
import { SubcategoryModule } from 'src/modules/subcategories/subcategory.module';
import { TenantSettingModule } from 'src/modules/tenant-setting/tenant-setting.module';
import { TenantModule } from 'src/modules/tenant/tenant.module';
import { TransferPaymentModule } from 'src/modules/transfer-payments/transfer-payment.module';
import { UserModule } from 'src/modules/user/user.module';
import { RbacModule } from 'src/shared/modules/rbac/rbac.module';
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
    OrderModule,
    OrderItemModule,
    PaymentModule,
    TransferPaymentModule,
    CashPaymentModule,
    BannerModule,
    TenantModule,
    LocalModule,
    TenantSettingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
