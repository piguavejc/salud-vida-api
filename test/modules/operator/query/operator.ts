import gql from 'graphql-tag';

export const CREATE_OPERATOR_MUTATION = gql`
  mutation CreateTenantOperator($input: CreateTenantUserInput!) {
    createTenantOperator(input: $input) {
      id
    }
  }
`;
