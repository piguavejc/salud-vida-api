import { Column, Entity, OneToMany } from 'typeorm';
import { IsEmail, IsEnum } from 'class-validator';

import { AddressEntity } from 'src/modules/addresses/entity/address.entity';
import { BillingEntity } from 'src/modules/billings/entity/billing.entity';
import { CartEntity } from 'src/modules/carts/entity/cart.entity';
import { CartItemEntity } from 'src/modules/cart-items/entity/cart-item.entity';
import { CommonEntity } from 'src/shared/typeorm/entity/common.entity';
import { FilterableField } from '@nestjs-query/query-graphql';
import { ObjectType } from '@nestjs/graphql';
import { ProfileEntity } from 'src/modules/profiles/entity/profile.entity';
import { Role } from 'src/shared/modules/rbac/enum/rbac.enum';

@Entity('users')
@ObjectType('User')
// @Authorize(createGenericAuthorizer(UserEntity))
export class UserEntity extends CommonEntity {
  @FilterableField(() => String)
  @IsEmail()
  @Column({ unique: true })
  email!: string;

  @FilterableField(() => Role)
  @IsEnum(Role)
  @Column({
    type: 'enum',
    enum: Role,
    default: Role.User,
  })
  role!: Role;

  @OneToMany(() => ProfileEntity, (profile) => profile.user)
  profiles: ProfileEntity[];

  @OneToMany(() => AddressEntity, (address) => address.user)
  addresses: AddressEntity[];

  @OneToMany(() => BillingEntity, (billing) => billing.user)
  billings: BillingEntity[];

  @OneToMany(() => CartEntity, (cart) => cart.user)
  carts: CartEntity[];

  @OneToMany(() => CartItemEntity, (cartItem) => cartItem.user)
  cartItems: CartItemEntity[];
}
