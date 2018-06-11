import merge from 'lodash.merge';
import { gql, makeExecutableSchema } from 'apollo-server';
import { typeDef as Book, resolvers as bookResolvers } from './books';
import { typeDef as Author, resolvers as authorResolvers } from './authors';

const Query = gql`
  type Query {
    _empty: String
  }
`;

const resolvers = {};

export default makeExecutableSchema({
  typeDefs: [Query, Book, Author],
  resolvers: merge(resolvers, bookResolvers, authorResolvers),
});
