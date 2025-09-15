import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';

const link = createHttpLink({
  uri: 'http://127.0.0.1:3000/graphql',
  fetch: fetch,
});

export const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
