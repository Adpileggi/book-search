const typeDefs = `
type User {
    _id: ID
    username: STRING
    email: STRING
    bookCount: INT
    savedBooks: [Book]
}

type Book {
    bookId: STRING
    authors: STRING
    description: STRING
    title: STRING
    image: STRING
    link: STRING
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