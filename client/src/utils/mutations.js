import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation AddUser($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        email
        _id
      }
    }
  }
`

export const ADD_USER = gql`
mutation AddUser($username: String!, $email: String!, $password: String) {
    addUser(username: $username, email: $email, password: $password) {
        token
        user {
          email
          _id
        }
    }
  }
`

export const SAVE_BOOK = gql`
mutation saveBook($newBook: InputBook!) {
  saveBook(newBook: $newBook) {
    _id
    username
    email
    savedBooks {
      bookId
      title
      description
      authors
      image
      link
    }
  }
}
`

export const REMOVE_BOOK = gql`
mutation removeBook($bookId: ID!) {
  removeBook(bookId: $bookId) {
    _id
    username
    email
    savedBooks {
      bookId
      authors
      description
      title
      image
      link
    }
  }
}
`