import {
  CreateTenantOperatorMutation,
  CreateTenantOperatorMutationVariables,
} from 'test/graphql/types';

export type CreateOperatorInput =
  CreateTenantOperatorMutationVariables['input'];
export type CreateOperator = CreateTenantOperatorMutation;
