import { ApolloServer } from 'apollo-server';
import schema from './schemas';

const server = new ApolloServer({ schema, mocks: false });

server.listen().then(({ url }) => {
  console.log(`🚀  Playground available at ${url}`);
});
