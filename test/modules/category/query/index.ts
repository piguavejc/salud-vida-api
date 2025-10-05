import {
  CategoriesQuery,
  CreateOneCategoryMutation,
  CreateOneCategoryMutationVariables,
  ToggleCategoryPublishedStatusMutationVariables,
  UpdateCategoryOrderMutation,
  UpdateCategoryOrderMutationVariables,
} from 'test/graphql/types';

export type Categories = CategoriesQuery;

export type CreateCategoryInput = CreateOneCategoryMutationVariables['input'];
export type CreateCategory = CreateOneCategoryMutation;

export type PublicCategoryInput =
  ToggleCategoryPublishedStatusMutationVariables['input'];

export type UpdateCategoryOrderIndexInput =
  UpdateCategoryOrderMutationVariables['input'];

export type UpdateOrderIndex = UpdateCategoryOrderMutation;
