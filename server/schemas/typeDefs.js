const typeDefs = `
type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book]
}

type Book {
    bookId: ID!
    authors: String
    description: String
    title: String
    image: String
    link: String
}

input InputBook {
    bookId: ID!
    authors: [String]
    title: String
    description: String
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
    login(email: String!, password: String!):Auth
    addUser(username: String!, email: String!, password: String):Auth
    saveBook(saveBook: InputBook!):User
    removeBook(_id: ID!, bookId: String!):User
}
`;

module.exports = typeDefs;