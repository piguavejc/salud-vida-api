import {
  CreateTenantUserMutation,
  CreateTenantUserMutationVariables,
} from 'test/graphql/types';

export type CreateUserInput = CreateTenantUserMutationVariables['input'];
export type CreateUser = CreateTenantUserMutation;
