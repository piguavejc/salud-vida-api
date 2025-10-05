import {
  GET_SUBCATEGORIES_QUERY,
  UPDATE_SUBCATEGORY_ORDER_INDEX_MUTATION,
} from 'test/modules/subcategory/query/subcategory';
import {
  Subcategories,
  UpdateSubcategoryOrder,
  UpdateSubcategoryOrderInput,
} from 'test/modules/subcategory/query';

import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Update Order Index Subcategory', () => {
  it('Order Index', async () => {
    try {
      const subcategoryRespones = await apolloClient.query<Subcategories>({
        query: GET_SUBCATEGORIES_QUERY,
      });

      const subcategories = subcategoryRespones.data?.subcategories.nodes ?? [];

      for (const subcategory of subcategories) {
        const input: UpdateSubcategoryOrderInput = {
          id: subcategory.id,
          orderIndex: 1,
        };

        const response = await apolloClient.mutate<UpdateSubcategoryOrder>({
          mutation: UPDATE_SUBCATEGORY_ORDER_INDEX_MUTATION,
          variables: {
            input,
          },
          context: {
            headers: {
              'x-tenant-id': 'c5294d40-168b-456a-be15-89304e0c2070',
            },
          },
        });

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
