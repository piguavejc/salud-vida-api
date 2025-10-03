import * as Types from './schema.types';

export type CreateTenantOperatorMutationVariables = Types.Exact<{
  input: Types.CreateTenantUserInput;
}>;


export type CreateTenantOperatorMutation = { __typename?: 'Mutation', createTenantOperator: { __typename?: 'User', id: string } };

export type CreateOneTenantMutationVariables = Types.Exact<{
  input: Types.CreateOneTenantInput;
}>;


export type CreateOneTenantMutation = { __typename?: 'Mutation', createOneTenant: { __typename?: 'Tenant', id: string } };

export type CreateTenantUserMutationVariables = Types.Exact<{
  input: Types.CreateTenantUserInput;
}>;


export type CreateTenantUserMutation = { __typename?: 'Mutation', createTenantUser: { __typename?: 'User', id: string } };
