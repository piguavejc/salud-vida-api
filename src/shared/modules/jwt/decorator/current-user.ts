import { type ExecutionContext, createParamDecorator } from '@nestjs/common';

import { GqlExecutionContext } from '@nestjs/graphql';
import { UserContext } from 'src/shared/modules/context/auth.context';

export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    return ctx.getContext<UserContext>().req.user;
  },
);
