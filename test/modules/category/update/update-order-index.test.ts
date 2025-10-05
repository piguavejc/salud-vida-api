import {
  GET_CATEGORIES_QUERY,
  UPDATE_CATEGORY_ORDER_INDEX_MUTATION,
} from 'test/modules/category/query/category';

import { Locals } from 'test/modules/local/query';
import { UpdateCategoryOrderIndexInput } from 'test/modules/category/query';
import { UpdateCategoryOrderMutation } from 'test/graphql/types';
import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Update Order Index Category', () => {
  it('Order Index', async () => {
    try {
      const categoryRespones = await apolloClient.query<Locals>({
        query: GET_CATEGORIES_QUERY,
      });

      const categories = categoryRespones.data?.locals.nodes ?? [];

      for (const category of categories) {
        const input: UpdateCategoryOrderIndexInput = {
          id: category.id,
          orderIndex: 1,
        };

        const response = await apolloClient.mutate<UpdateCategoryOrderMutation>(
          {
            mutation: UPDATE_CATEGORY_ORDER_INDEX_MUTATION,
            variables: {
              input,
            },
            context: {
              headers: {
                'x-tenant-id': 'c5294d40-168b-456a-be15-89304e0c2070',
              },
            },
          },
        );

        const createUser = response.data;
        expect(createUser).toBeDefined();
      }
    } catch (error) {
      const graphqlError = JSON.stringify(error, null, 2);
      const message = getFirstErrorMessage(graphqlError);
      expect(message).toBeDefined();
      expect(message).toContain(
        'El índice de orden no puede ser mayor al número de categorías existentes',
      );
    }
  });
});
