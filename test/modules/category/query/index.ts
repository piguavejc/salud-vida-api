import {
  CreateOneCategoryMutation,
  CreateOneCategoryMutationVariables,
} from 'test/graphql/types';

export type CreateCategoryInput = CreateOneCategoryMutationVariables['input'];
export type CreateCategory = CreateOneCategoryMutation;
