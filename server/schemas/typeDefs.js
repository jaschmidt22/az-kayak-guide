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
  }

  type Lake {
    _id: ID
    name:String
    location: String
    beaches: Boolean
    fishSpecies: String
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
  }
  


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addBlogPost(blogpostText: String!): BlogPost
    removeBlogPost(blogpostId: ID!): BlogPost
  
  }
`;

module.exports = typeDefs;
