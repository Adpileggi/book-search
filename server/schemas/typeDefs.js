const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: String
    authors: String
    description: String
    title: String
    image: String
    link: String
}

type Auth {
    token: ID!
    user: User
}

type Query {
    me: User
}

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(userName: String!, email: String!, password: String):User
    saveBook(userId: ID!, bookId: String!):User
    removeBook(userId: ID!, bookId: String!):User
}
`;

module.exports = typeDefs;