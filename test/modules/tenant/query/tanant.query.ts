import gql from 'graphql-tag';

export const CREATE_TENANT_MUTATION = gql`
  mutation CreateOneTenant($input: CreateOneTenantInput!) {
    createOneTenant(input: $input) {
      id
    }
  }
`;
