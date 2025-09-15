import * as Types from './schema.types';

export type CreateOneTenantMutationVariables = Types.Exact<{
  input: Types.CreateOneTenantInput;
}>;


export type CreateOneTenantMutation = { __typename?: 'Mutation', createOneTenant: { __typename?: 'Tenant', id: string } };
