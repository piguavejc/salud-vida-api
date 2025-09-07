import { Role } from 'src/shared/modules/rbac/enum/rbac.enum';
import { UserEntity } from 'src/modules/user/entity/user.entity';

export type AuthenticatedUser = Pick<UserEntity, 'role' | 'id'>;

export interface JwtPayload {
  role: Role;
  id: string;
}

export interface UserContext {
  req: {
    user: AuthenticatedUser;
    app: any;
  };
}
