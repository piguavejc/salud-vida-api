import {
  CreateCategory,
  CreateCategoryInput,
} from 'test/modules/category/query';

import { CREATE_CATEGORY_MUTATION } from 'test/modules/category/query/category';
import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Category', () => {
  it('Create Category', async () => {
    const input: CreateCategoryInput = {
      category: {
        description: 'Falta description',
        imageId: 'ec83dca8-6197-4777-82a5-f436f67be805',
        name: 'Local 1',
        tenantId: 'c5294d40-168b-456a-be15-89304e0c2070',
        localId: '8b0487d4-56cc-4b80-82bc-652931aecb85',
      },
    };

    try {
      const response = await apolloClient.mutate<CreateCategory>({
        mutation: CREATE_CATEGORY_MUTATION,
        variables: {
          input,
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
