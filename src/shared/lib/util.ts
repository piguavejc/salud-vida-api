/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
  AutoResolverOpts,
  PagingStrategies,
  ReadResolverOpts,
} from '@nestjs-query/query-graphql';

import { JwtAuthGuard } from 'src/shared/modules/jwt/guard/jwt.guard';
/* eslint-disable @typescript-eslint/no-unsafe-return */
// import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import deepmerge from 'deepmerge';

type CRUDResolverOptions = AutoResolverOpts<
  unknown,
  unknown,
  unknown,
  unknown,
  ReadResolverOpts<unknown>,
  PagingStrategies
>;

type InitialResolverOptions = Omit<
  CRUDResolverOptions,
  'ServiceClass' | 'DTOClass'
>;

const initialResolver: InitialResolverOptions = {
  enableTotalCount: true,
  pagingStrategy: PagingStrategies.OFFSET,
  guards: [JwtAuthGuard],
  create: { many: { disabled: true } },
  update: { many: { disabled: true } },
  delete: { many: { disabled: true } },
};

export const createCustomResolver = (
  options: CRUDResolverOptions,
): CRUDResolverOptions => {
  // @ts-ignore
  return deepmerge(initialResolver, options);
};

// ...existing code...

interface GraphQLErrorResponse {
  errors: Array<{
    message: string;
    locations?: Array<{
      line: number;
      column: number;
    }>;
    path?: string[];
    extensions?: {
      code: string;
      stacktrace?: string[];
    };
  }>;
  data: any;
  name: string;
}

interface ParsedGraphQLError {
  message: string;
  code?: string;
  path?: string;
  location?: string;
  stacktrace?: string[];
}

export const parseGraphQLError = (
  errorString: string,
): ParsedGraphQLError[] => {
  try {
    const errorObj: GraphQLErrorResponse = JSON.parse(errorString);

    return errorObj.errors.map((error) => ({
      message: error.message,
      code: error.extensions?.code,
      path: error.path?.join(' -> '),
      location: error.locations?.[0]
        ? `Line ${error.locations[0].line}, Column ${error.locations[0].column}`
        : undefined,
      stacktrace: error.extensions?.stacktrace,
    }));
  } catch {
    return [
      {
        message: errorString,
      },
    ];
  }
};

// Función helper para obtener solo el primer mensaje de error
export const getFirstErrorMessage = (errorString: string): string => {
  const errors = parseGraphQLError(errorString);
  return errors[0]?.message || 'Error desconocido';
};
