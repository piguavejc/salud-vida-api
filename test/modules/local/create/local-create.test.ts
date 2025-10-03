import { CreateLocal, CreateLocalInput } from 'test/modules/local/query';

import { apolloClient } from 'test/apollo-client/apollo-client';
import { CREATE_LOCAL_MUTATION } from 'test/modules/local/query/local';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Driver', () => {
  it('Driver Register', async () => {
    const input: CreateLocalInput = {
      local: {
        description: 'Falta description',
        imageId: 'ec83dca8-6197-4777-82a5-f436f67be805',
        name: 'Local 1',
        tenantId: 'c5294d40-168b-456a-be15-89304e0c2070',
      },
    };

    try {
      const response = await apolloClient.mutate<CreateLocal>({
        mutation: CREATE_LOCAL_MUTATION,
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
      expect(message).toBe(
        `Ya existe un local con este nombre: ${input.local.name}`,
      );
    }
  });
});
