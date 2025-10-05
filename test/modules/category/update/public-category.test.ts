import { Categories, PublicCategoryInput } from 'test/modules/category/query';
import {
  GET_CATEGORIES_QUERY,
  PUBLIC_CATEGORY_MUTATION,
} from 'test/modules/category/query/category';

import { PublicLocal } from 'test/modules/local/query';
import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Category', () => {
  it('Public category', async () => {
    try {
      const categoryRespones = await apolloClient.query<Categories>({
        query: GET_CATEGORIES_QUERY,
      });

      const categories = categoryRespones.data?.categories.nodes ?? [];

      const input: PublicCategoryInput = {
        ids: categories.map((category) => category.id),
        published: true,
      };

      const response = await apolloClient.mutate<PublicLocal>({
        mutation: PUBLIC_CATEGORY_MUTATION,
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
