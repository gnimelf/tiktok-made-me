import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      profile {
        _id
        userName
      }
    }
  }
  `;

export const ADD_PROFILE = gql`
mutation AddProfile($firstName: String!, $lastName: String!, $email: String!, $userName: String!, $password: String!) {
  addProfile(firstName: $firstName, lastName: $lastName, email: $email, userName: $userName, password: $password) {
    token
    profile {
      _id
      userName
    }
  }
}
`;

export const ADD_COMMENT = gql`
mutation AddComment($postId: ID!, $title: String!, $commentText: String!) {
  addComment(postId: $postId, title: $title, commentText: $commentText) {
    _id
    commentText
    title
  }
}
`

export const REMOVE_COMMENT = gql`
mutation RemoveComment($commentId: ID!) {
  removeComment(commentId: $commentId) {
    _id
    title
  }
}
`
