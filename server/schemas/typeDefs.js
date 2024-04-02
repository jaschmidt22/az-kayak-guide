const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    blogposts: [BlogPost]!
  }

  type BlogPost {
    _id: ID
    thoughtText: String
    thoughtAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Lake {
    _id: ID
    name:String
    location: String
    beaches: Boolean
    fishSpecies: String
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
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
    lakes: [Lake]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBlogPost(blogpostText: String!): BlogPost
    addComment(blogpostId: ID!, commentText: String!): BlogPost
    removeBlogPost(blogpostId: ID!): BlogPost
    removeComment(blogpostId: ID!, commentId: ID!): BlogPost
  }
`;

module.exports = typeDefs;
