import {
  CreateOneSubcategoryMutation,
  CreateOneSubcategoryMutationVariables,
  SubcategoriesQuery,
  ToggleSubcategoryPublishedStatusMutation,
  ToggleSubcategoryPublishedStatusMutationVariables,
  UpdateSubcategoryOrderMutation,
  UpdateSubcategoryOrderMutationVariables,
} from 'test/graphql/types';

export type Subcategories = SubcategoriesQuery;

export type CreateSubcategoryInput =
  CreateOneSubcategoryMutationVariables['input'];
export type CreateSubcategory = CreateOneSubcategoryMutation;

export type PublicSubcategoryInput =
  ToggleSubcategoryPublishedStatusMutationVariables['input'];
export type PublicSubcategory = ToggleSubcategoryPublishedStatusMutation;

export type UpdateSubcategoryOrderInput =
  UpdateSubcategoryOrderMutationVariables['input'];
export type UpdateSubcategoryOrder = UpdateSubcategoryOrderMutation;
