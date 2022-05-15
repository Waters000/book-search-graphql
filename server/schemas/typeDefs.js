const { gql } = require('apollo-server-express');


const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    savedBooks: [Book]
  }

  type Book {
    _id: ID
    authors: [String]
    drescription: String
    bookId: String
    image: String
    link: String
    title: String
  }

  type Auth {
      token: ID!
      user: User
  }
  
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    savedBooks: [book]
  }
  
  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook(title: String! authors: [String] description: String! bookId: String! image: String link: String ): Book
    deleteBook(bookId: String!): Book
    
}`

module.exports = typeDefs;