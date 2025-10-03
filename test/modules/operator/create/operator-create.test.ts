import {
  CreateOperator,
  CreateOperatorInput,
} from 'test/modules/operator/query';

import { apolloClient } from 'test/apollo-client/apollo-client';
import { CREATE_OPERATOR_MUTATION } from 'test/modules/operator/query/operator';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('Operator', () => {
  it('Operator Register', async () => {
    const input: CreateOperatorInput = {
      email: 'operator@gmail.com',
      tenantId: 'c5294d40-168b-456a-be15-89304e0c2070',
    };

    try {
      const response = await apolloClient.mutate<CreateOperator>({
        mutation: CREATE_OPERATOR_MUTATION,
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
        `Ya existe un usuario con este correo electrónico: ${input.email}`,
      );
    }
  });
});
