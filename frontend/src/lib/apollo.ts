import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'https://api-graphql-internal-challenge.herokuapp.com/graphql',
  cache: new InMemoryCache()
})