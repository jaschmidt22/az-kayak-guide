import { gql } from "@apollo/client";

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user{
        username
      }
    }
  }
`;
export const ADD_BLOGPOST = gql`
  mutation addBlogPost(
    $blogpostText: String!
    $title: String!
  ) {
    addBlogPost(
      blogpostText: $blogpostText
      title: $title
    ) {
      _id
      blogPostText
      blogPostAuthor
      createdAt
    }
  }
`;
export const REMOVE_BLOGPOST = gql`
  mutation removeBlogPost($blogPostId: ID!) {
    removeBlogPost(blogPostId: $blogPostId) {
      _id
      success
      message
    }
  }
`;
export const UPDATE_BLOGPOST = gql`
  mutation updateBlogPost(
    $blogPostId: ID!
    $updatedText: String!
    $updatedAt: Date!
  ) {
    updateBlogPost(
      blogPostId: $blogPostId
      updatedText: $updatedText
      updatedAt: $updatedAt
    ) {
      _id
      blogPostText
      updatedAt
    }
  }
`;
