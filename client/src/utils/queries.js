import { gql } from "@apollo/client";

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      blogPosts {
        _id
        blogPostText
        createdAt
      }
    }
  }
`;

export const QUERY_BLOGPOSTS = gql`
  query getBlogPosts {
    blogPosts {
      _id
      blogPostText
      blogPostAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_BLOGPOST = gql`
  query getSingleBlogPost($blogPostId: ID!) {
    blogpost(blogPostId: $blogPostId) {
      _id
      blogPostText
      blogPostAuthor
      createdAt
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      blogPosts {
        _id
        blogPostText
        blogPostAuthor
        createdAt
      }
    }
  }
`;
