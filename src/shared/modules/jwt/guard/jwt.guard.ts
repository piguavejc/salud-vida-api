/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { ExecutionContext, Injectable } from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class JwtAuthGuard {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context);
    const gqlContext = ctx.getContext();

    // // Manejo de HTTP/GraphQL Request
    const req = gqlContext.req;
    if (req) {
      const headers = req.headers;
      // const authHeader = headers.authorization;
      // if (!authHeader) {
      //   throw new UnauthorizedException(
      //     'Authorization header missing for HTTP',
      //   );
      // }

      // const token = authHeader.split(' ')[1];
      // if (!token) {
      //   throw new UnauthorizedException('Token missing for HTTP');
      // }

      req.user = {
        tenantId: headers['x-tenant-id'],
      };
      return true;
    }

    // throw new UnauthorizedException('Invalid context');
    return Promise.resolve(true);
  }
}
