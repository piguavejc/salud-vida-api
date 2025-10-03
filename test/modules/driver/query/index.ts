import {
  CreateTenantDriverMutation,
  CreateTenantDriverMutationVariables,
} from 'test/graphql/types';

export type CreateDriverInput = CreateTenantDriverMutationVariables['input'];
export type CreateDriver = CreateTenantDriverMutation;
