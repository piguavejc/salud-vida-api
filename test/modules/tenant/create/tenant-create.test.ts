import { CreateTenant, CreateTenantInput } from 'test/modules/tenant/query';

import { apolloClient } from 'test/apollo-client/apollo-client';
import { CREATE_TENANT_MUTATION } from 'test/modules/tenant/query/tanant.query';

describe('Tenant', () => {
  it('Tenant Register', async () => {
    const input: CreateTenantInput = {
      tenant: {
        email: 'piguavejc@gmail.co,',
        fullName: 'Jean Carlos Piguave Alvarado',
        phone: '0983526509',
      },
    };
    const response = await apolloClient.mutate<CreateTenant>({
      mutation: CREATE_TENANT_MUTATION,
      variables: {
        input,
      },
    });

    const createTenant = response.data?.createOneTenant;

    expect(createTenant).toBeDefined();
  });
});
