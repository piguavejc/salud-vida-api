import {
  CreateSubcategory,
  CreateSubcategoryInput,
} from 'test/modules/subcategory/query';

import { CREATE_SUBCATEGORY_MUTATION } from 'test/modules/subcategory/query/subcategory';
import { Categories } from 'test/modules/category/query';
import { GET_CATEGORIES_QUERY } from 'test/modules/category/query/category';
import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Subcategory', () => {
  it('Create Subcategory', async () => {
    const categoryRespones = await apolloClient.query<Categories>({
      query: GET_CATEGORIES_QUERY,
    });

    const categories = categoryRespones.data?.categories.nodes ?? [];

    const input: CreateSubcategoryInput = {
      subcategory: {
        description: 'Falta description',
        name: 'Local 1',
        localId: '8b0487d4-56cc-4b80-82bc-652931aecb85',
        categoryId: categories[0].id,
      },
    };

    try {
      const response = await apolloClient.mutate<CreateSubcategory>({
        mutation: CREATE_SUBCATEGORY_MUTATION,
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
      expect(message).toBe(`El nombre ${input.subcategory.name} ya existe`);
    }
  });
});
