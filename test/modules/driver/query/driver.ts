import gql from 'graphql-tag';

export const CREATE_DRIVER_MUTATION = gql`
  mutation CreateTenantDriver($input: CreateTenantUserInput!) {
    createTenantDriver(input: $input) {
      id
    }
  }
`;
