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
mutation saveBook($userId: ID!, $bookId: String!) {
    saveBook(userId: $userId, bookId: $bookId) {
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

export const REMOVE_BOOK = gql`
mutation removeBook($userId: ID!, $bookId: String!) {
    removeBook(userId: $userId, bookId: $bookId) {
      _id
      savedBooks {
        bookId
      }
    }
  }
`