import {
  GET_LOCALS_QUERY,
  PUBLIC_LOCAL_MUTATION,
} from 'test/modules/local/query/local';
import {
  Locals,
  PublicLocal,
  PublicLocalInput,
} from 'test/modules/local/query';

import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Local', () => {
  it('Public local', async () => {
    try {
      const localRespones = await apolloClient.query<Locals>({
        query: GET_LOCALS_QUERY,
      });

      const locals = localRespones.data?.locals.nodes ?? [];

      const input: PublicLocalInput = {
        ids: locals.map((local) => local.id),
        isPublic: true,
        tenantId: 'c5294d40-168b-456a-be15-89304e0c2070',
      };

      const response = await apolloClient.mutate<PublicLocal>({
        mutation: PUBLIC_LOCAL_MUTATION,
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
