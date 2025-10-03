import { registerEnumType } from '@nestjs/graphql';

export enum Role {
  SuperAdmin = 'super-admin',
  Admin = 'admin',
  Customer = 'customer',
  User = 'user',
  Operator = 'operator',
  Driver = 'driver',
}

registerEnumType(Role, {
  name: 'Role',
});
