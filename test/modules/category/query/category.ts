import { gql } from '@apollo/client';

export const CREATE_CATEGORY_MUTATION = gql`
  mutation CreateOneCategory($input: CreateOneCategoryInput!) {
    createOneCategory(input: $input) {
      id
    }
  }
`;
