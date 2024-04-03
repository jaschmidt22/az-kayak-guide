import { gql } from '@apollo/client';


export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(name: $username) {
      _id
      username
      email
      blogposts
    }
  }
`;
export const ADD_BLOGPOST = gql`
  mutation addBlogPost($blogPostText: String!, $blogPostAuthor: String!, $createdAt: Date!) {
    addBlogPost(blogPostText: $blogPostText, blogPostAuthor: $blogPostAuthor, createdAt: $createdAt) {
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
  mutation updateBlogPost($blogPostId: ID!, $updatedText: String!, $updatedAt: Date!) {
    updateBlogPost(blogPostId: $blogPostId, updatedText: $updatedText, updatedAt: $updatedAt) {
      _id
      blogPostText
      updatedAt
    }
  }
`;