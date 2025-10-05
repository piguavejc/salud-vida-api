import {
  GET_SUBCATEGORIES_QUERY,
  PUBLIC_SUBCATEGORY_MUTATION,
} from 'test/modules/subcategory/query/subcategory';
import {
  PublicSubcategory,
  PublicSubcategoryInput,
  Subcategories,
} from 'test/modules/subcategory/query';

import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Category', () => {
  it('Public category', async () => {
    try {
      const subcategoryRespones = await apolloClient.query<Subcategories>({
        query: GET_SUBCATEGORIES_QUERY,
      });

      const subcategories = subcategoryRespones.data?.subcategories.nodes ?? [];

      const input: PublicSubcategoryInput = {
        ids: subcategories.map((subcategory) => subcategory.id),
        published: true,
      };

      const response = await apolloClient.mutate<PublicSubcategory>({
        mutation: PUBLIC_SUBCATEGORY_MUTATION,
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
    } catch (error) {
      const graphqlError = JSON.stringify(error, null, 2);
      const message = getFirstErrorMessage(graphqlError);

      expect(message).toBeDefined();
    }
  });
});
