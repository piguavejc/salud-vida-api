import * as Types from './schema.types';

export type CreateTenantDriverMutationVariables = Types.Exact<{
  input: Types.CreateTenantUserInput;
}>;


export type CreateTenantDriverMutation = { __typename?: 'Mutation', createTenantDriver: { __typename?: 'User', id: string } };

export type LocalsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LocalsQuery = { __typename?: 'Query', locals: { __typename?: 'LocalConnection', nodes: Array<{ __typename?: 'Local', id: string }> } };

export type CreateOneLocalMutationVariables = Types.Exact<{
  input: Types.CreateOneLocalInput;
}>;


export type CreateOneLocalMutation = { __typename?: 'Mutation', createOneLocal: { __typename?: 'Local', id: string } };

export type PublicLocalMutationVariables = Types.Exact<{
  input: Types.PublicLocalInput;
}>;


export type PublicLocalMutation = { __typename?: 'Mutation', publicLocal: { __typename?: 'Local', id: string } };

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
