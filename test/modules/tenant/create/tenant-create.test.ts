import { CreateTenant, CreateTenantInput } from 'test/modules/tenant/query';

import { getFirstErrorMessage } from 'src/shared/lib/util';
import { apolloClient } from 'test/apollo-client/apollo-client';
import { CREATE_TENANT_MUTATION } from 'test/modules/tenant/query/tanant.query';

describe('Tenant', () => {
  it('Tenant Register', async () => {
    const input: CreateTenantInput = {
      tenant: {
        email: 'piguavejc@gmail.com',
        fullNames: 'Jean Carlos Piguave Alvarado',
        phone: '0983526509',
      },
    };

    try {
      const response = await apolloClient.mutate<CreateTenant>({
        mutation: CREATE_TENANT_MUTATION,
        variables: {
          input,
        },
      });

      const createTenant = response.data?.createOneTenant;

      expect(createTenant).toBeDefined();
    } catch (error) {
      const grapqhlError = JSON.stringify(error, null, 2);
      const message = getFirstErrorMessage(grapqhlError);
      expect(message).toBeDefined();
      expect(message).toBe(
        `Ya existe un inquilino con este correo electrónico: ${input.tenant.email}`,
      );
    }
  });
});
