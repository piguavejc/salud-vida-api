import {
  GET_LOCALS_QUERY,
  UPDATE_ORDER_INDEX_LOCAL_MUTATION,
} from 'test/modules/local/query/local';
import {
  Locals,
  UpdateOrderIndex,
  UpdateOrderIndexInput,
} from 'test/modules/local/query';

import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Update Order Index Local', () => {
  it('Order Index', async () => {
    try {
      const localRespones = await apolloClient.query<Locals>({
        query: GET_LOCALS_QUERY,
      });

      const locals = localRespones.data?.locals.nodes ?? [];

      for (const local of locals) {
        const input: UpdateOrderIndexInput = {
          id: local.id,
          tenantId: 'c5294d40-168b-456a-be15-89304e0c2070',
          orderIndex: 1,
        };

        const response = await apolloClient.mutate<UpdateOrderIndex>({
          mutation: UPDATE_ORDER_INDEX_LOCAL_MUTATION,
          variables: {
            input,
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
        'El valor de orderIndex excede el número de locales existentes',
      );
    }
  });
});
