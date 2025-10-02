import gql from 'graphql-tag';

export const CREATE_USER_MUTATION = gql`
  mutation CreateTenantUser($input: CreateTenantUserInput!) {
    createTenantUser(input: $input) {
      id
    }
  }
`;
