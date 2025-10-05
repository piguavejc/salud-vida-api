import { CREATE_USER_MUTATION } from 'test/modules/user/query/user';
import { CreateUser } from 'test/graphql/schema.types';
import { CreateUserInput } from 'test/modules/user/query';
import { apolloClient } from 'test/apollo-client/apollo-client';
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { getFirstErrorMessage } from 'src/shared/lib/util';

describe('User', () => {
  it('User Register', async () => {
    const input: CreateUserInput = {
      email: 'jpiguave5460@utm.edu.ec',
    };

    try {
      const response = await apolloClient.mutate<CreateUser>({
        mutation: CREATE_USER_MUTATION,
        variables: {
          input,
        },
        context: {
          headers: {
            tenantId: 'c5294d40-168b-456a-be15-89304e0c2070',
          },
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
