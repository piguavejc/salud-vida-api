import {
  CategoriesQuery,
  CreateOneCategoryMutation,
  CreateOneCategoryMutationVariables,
  ToggleCategoryPublishedStatusMutationVariables,
} from 'test/graphql/types';

export type Categories = CategoriesQuery;

export type CreateCategoryInput = CreateOneCategoryMutationVariables['input'];
export type CreateCategory = CreateOneCategoryMutation;

export type PublicCategoryInput =
  ToggleCategoryPublishedStatusMutationVariables['input'];
