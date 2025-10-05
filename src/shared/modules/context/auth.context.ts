import { UserEntity } from 'src/modules/user/entity/user.entity';

export type AuthenticatedUser = Pick<UserEntity, 'role' | 'id' | 'tenantId'>;

export interface JwtPayload {
  tenantId: string;
}

export interface UserContext {
  req: {
    user: AuthenticatedUser;
  };
}
