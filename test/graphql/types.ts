import * as Types from './schema.types';

export type CategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: { __typename?: 'CategoryConnection', nodes: Array<{ __typename?: 'Category', id: string }> } };

export type CreateOneCategoryMutationVariables = Types.Exact<{
  input: Types.CreateOneCategoryInput;
}>;


export type CreateOneCategoryMutation = { __typename?: 'Mutation', createOneCategory: { __typename?: 'Category', id: string } };

export type ToggleCategoryPublishedStatusMutationVariables = Types.Exact<{
  input: Types.TogglePublishedInput;
}>;


export type ToggleCategoryPublishedStatusMutation = { __typename?: 'Mutation', toggleCategoryPublishedStatus: Array<{ __typename?: 'Category', id: string }> };

export type UpdateCategoryOrderMutationVariables = Types.Exact<{
  input: Types.UpdateOrderInput;
}>;


export type UpdateCategoryOrderMutation = { __typename?: 'Mutation', updateCategoryOrder: { __typename?: 'Category', id: string } };

export type CreateTenantDriverMutationVariables = Types.Exact<{
  input: Types.CreateTenantUserInput;
}>;


export type CreateTenantDriverMutation = { __typename?: 'Mutation', createTenantDriver: { __typename?: 'User', id: string } };

export type LocalsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type LocalsQuery = { __typename?: 'Query', locals: { __typename?: 'LocalConnection', nodes: Array<{ __typename?: 'Local', id: string }> } };

export type CreateOneLocalMutationVariables = Types.Exact<{
  input: Types.CreateOneLocalInput;
}>;


export type CreateOneLocalMutation = { __typename?: 'Mutation', createOneLocal: { __typename?: 'Local', id: string } };

export type PublicLocalMutationVariables = Types.Exact<{
  input: Types.TogglePublishedInput;
}>;


export type PublicLocalMutation = { __typename?: 'Mutation', publicLocal: Array<{ __typename?: 'Local', id: string }> };

export type UpdateOrderIndexByIdMutationVariables = Types.Exact<{
  input: Types.UpdateOrderInput;
}>;


export type UpdateOrderIndexByIdMutation = { __typename?: 'Mutation', updateOrderIndexById: { __typename?: 'Local', id: string } };

export type CreateTenantOperatorMutationVariables = Types.Exact<{
  input: Types.CreateTenantUserInput;
}>;


export type CreateTenantOperatorMutation = { __typename?: 'Mutation', createTenantOperator: { __typename?: 'User', id: string } };

export type SubcategoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type SubcategoriesQuery = { __typename?: 'Query', subcategories: { __typename?: 'SubcategoryConnection', nodes: Array<{ __typename?: 'Subcategory', id: string }> } };

export type CreateOneSubcategoryMutationVariables = Types.Exact<{
  input: Types.CreateOneSubcategoryInput;
}>;


export type CreateOneSubcategoryMutation = { __typename?: 'Mutation', createOneSubcategory: { __typename?: 'Subcategory', id: string } };

export type ToggleSubcategoryPublishedStatusMutationVariables = Types.Exact<{
  input: Types.TogglePublishedInput;
}>;


export type ToggleSubcategoryPublishedStatusMutation = { __typename?: 'Mutation', toggleSubcategoryPublishedStatus: Array<{ __typename?: 'Subcategory', id: string }> };

export type UpdateSubcategoryOrderMutationVariables = Types.Exact<{
  input: Types.UpdateOrderInput;
}>;


export type UpdateSubcategoryOrderMutation = { __typename?: 'Mutation', updateSubcategoryOrder: { __typename?: 'Subcategory', id: string } };

export type CreateOneTenantMutationVariables = Types.Exact<{
  input: Types.CreateOneTenantInput;
}>;


export type CreateOneTenantMutation = { __typename?: 'Mutation', createOneTenant: { __typename?: 'Tenant', id: string } };

export type CreateTenantUserMutationVariables = Types.Exact<{
  input: Types.CreateTenantUserInput;
}>;


export type CreateTenantUserMutation = { __typename?: 'Mutation', createTenantUser: { __typename?: 'User', id: string } };
