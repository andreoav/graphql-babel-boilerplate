import { gql } from 'apollo-server';
import { books, authors } from '../seeds';

export const typeDef = gql`
  extend type Query {
    books: [Book]
    book(id: Int!): Book
  }

  type Book {
    id: Int
    title: String
    author: Author
  }
`;

export const resolvers = {
  Query: {
    books: () => books,
    book: (_, args) => books.find(book => book.id === args.id),
  },

  Book: {
    author: book => authors.find(author => author.id === book.authorId),
  },
};
