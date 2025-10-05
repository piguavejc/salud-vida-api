import gql from 'graphql-tag';

export const GET_LOCALS_QUERY = gql`
  query Locals {
    locals {
      nodes {
        id
      }
    }
  }
`;

export const CREATE_LOCAL_MUTATION = gql`
  mutation CreateOneLocal($input: CreateOneLocalInput!) {
    createOneLocal(input: $input) {
      id
    }
  }
`;

export const PUBLIC_LOCAL_MUTATION = gql`
  mutation PublicLocal($input: TogglePublishedInput!) {
    publicLocal(input: $input) {
      id
    }
  }
`;

export const UPDATE_ORDER_INDEX_LOCAL_MUTATION = gql`
  mutation UpdateOrderIndexById($input: UpdateOrderInput!) {
    updateOrderIndexById(input: $input) {
      id
    }
  }
`;
