import { gql } from '@apollo/client';

export const GET_SUBCATEGORIES_QUERY = gql`
  query Subcategories {
    subcategories {
      nodes {
        id
      }
    }
  }
`;

export const CREATE_SUBCATEGORY_MUTATION = gql`
  mutation CreateOneSubcategory($input: CreateOneSubcategoryInput!) {
    createOneSubcategory(input: $input) {
      id
    }
  }
`;

export const PUBLIC_SUBCATEGORY_MUTATION = gql`
  mutation ToggleSubcategoryPublishedStatus($input: TogglePublishedInput!) {
    toggleSubcategoryPublishedStatus(input: $input) {
      id
    }
  }
`;

export const UPDATE_SUBCATEGORY_ORDER_INDEX_MUTATION = gql`
  mutation UpdateSubcategoryOrder($input: UpdateOrderInput!) {
    updateSubcategoryOrder(input: $input) {
      id
    }
  }
`;
