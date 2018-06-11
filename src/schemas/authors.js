import { gql } from 'apollo-server';
import { books, authors } from '../seeds';

export const typeDef = gql`
  extend type Query {
    authors: [Author]
    author(id: Int!): Author
  }

  type Author {
    id: Int
    name: String
    books: [Book]
  }
`;

export const resolvers = {
  Query: {
    authors: () => authors,
    author: (_, args) => authors.find(author => author.id === args.id),
  },

  Author: {
    books: author => books.filter(book => book.authorId === author.id),
  },
};
