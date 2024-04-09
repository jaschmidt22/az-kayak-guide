const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String

  }

  type BlogPost {
    _id: ID
    title: String
    blogPostText: String
    blogPostAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    blogposts(username: String): [BlogPost]
    blogpost(blogpostId: ID!): BlogPost
    me: User
    meBlogs: [BlogPost]
  }
  


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBlogPost(title: String!, blogpostText: String!): BlogPost
    removeBlogPost(blogpostId: ID!): BlogPost
    updateBlogPost(blogPostId: ID!, updatedText: String!): BlogPost
  }
`;

module.exports = typeDefs;
