/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ExecutionContext, Injectable } from '@nestjs/common';

@Injectable()
export class JwtAuthGuard {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    // const ctx = GqlExecutionContext.create(context);
    // const gqlContext = ctx.getContext();

    // // Manejo de WebSocket Connection
    // const authorization = gqlContext.authorization as string;
    // if (authorization) {
    //   const token = authorization.split(' ')[1];
    //   if (!token) {
    //     throw new UnauthorizedException('Token missing for WebSocket');
    //   }

    //   try {
    //     const user = await this.jwtService.verifyToken(token);
    //     gqlContext.user = {
    //       id: user.id,
    //       tenantId: user.tenantId,
    //       role: user.role,
    //     }; // Injecta el usuario en el contexto
    //     return true;
    //   } catch {
    //     throw new UnauthorizedException('Invalid token for WebSocket');
    //   }
    // }

    // // Manejo de HTTP/GraphQL Request
    // const req = gqlContext.req;
    // if (req) {
    //   const authHeader = req.headers.authorization;
    //   if (!authHeader) {
    //     throw new UnauthorizedException(
    //       'Authorization header missing for HTTP',
    //     );
    //   }

    //   const token = authHeader.split(' ')[1];
    //   if (!token) {
    //     throw new UnauthorizedException('Token missing for HTTP');
    //   }

    //   const user = await this.jwtService.verifyToken(token);

    //   req.user = {
    //     id: user.id,
    //     tenantId: user.tenantId,
    //     role: user.role,
    //   };
    //   return true;
    // }

    // throw new UnauthorizedException('Invalid context');
    return Promise.resolve(true);
  }
}
