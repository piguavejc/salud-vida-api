import {
  CreateOneTenantMutation,
  CreateOneTenantMutationVariables,
} from 'test/graphql/types';

export type CreateTenantInput = CreateOneTenantMutationVariables['input'];
export type CreateTenant = CreateOneTenantMutation;
