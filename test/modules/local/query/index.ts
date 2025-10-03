import {
  CreateOneLocalMutation,
  CreateOneLocalMutationVariables,
  LocalsQuery,
  PublicLocalMutation,
  PublicLocalMutationVariables,
  UpdateOrderIndexByIdMutation,
  UpdateOrderIndexByIdMutationVariables,
} from 'test/graphql/types';

export type Locals = LocalsQuery;

export type CreateLocalInput = CreateOneLocalMutationVariables['input'];
export type CreateLocal = CreateOneLocalMutation;

export type PublicLocalInput = PublicLocalMutationVariables['input'];
export type PublicLocal = PublicLocalMutation;

export type UpdateOrderIndexInput =
  UpdateOrderIndexByIdMutationVariables['input'];
export type UpdateOrderIndex = UpdateOrderIndexByIdMutation;
