import { gql } from '@apollo/client';

export const GET_CATEGORIES_QUERY = gql`
  query Categories {
    categories {
      nodes {
        id
      }
    }
  }
`;

export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateOneCategory($input: CreateOneCategoryInput!) {
    createOneCategory(input: $input) {
      id
    }
  }
`;

export const PUBLIC_CATEGORY_MUTATION = gql`
  mutation ToggleCategoryPublishedStatus($input: TogglePublishedInput!) {
    toggleCategoryPublishedStatus(input: $input) {
      id
    }
  }
`;

export const UPDATE_CATEGORY_ORDER_INDEX_MUTATION = gql`
  mutation UpdateCategoryOrder($input: UpdateOrderInput!) {
    updateCategoryOrder(input: $input) {
      id
    }
  }
`;
