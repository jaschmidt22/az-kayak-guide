const { User, BlogPost } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("BlogPosts");
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate("BlogPosts");
    },
    blogPosts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return BlogPost.find(params).sort({ createdAt: -1 });
    },
    blogPost: async (parent, { BlogPostId }) => {
      return BlogPost.findOne({ _id: BlogPostId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate("BlogPosts");
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw AuthenticationError;
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(user);

      return { token, user };
    },
    addBlogPost: async (parent, { blogPostText }, context) => {
      if (context.user) {
        const BlogPost = await BlogPost.create({
          blogPostText,
          blogPostAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { BlogPosts: BlogPost._id } }
        );

        return BlogPost;
      }
      throw AuthenticationError;
      ("You need to be logged in!");
    },

    removeBlogPost: async (parent, { BlogPostId }, context) => {
      if (context.user) {
        const BlogPost = await BlogPost.findOneAndDelete({
          _id: BlogPostId,
          blogPostAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { BlogPosts: BlogPost._id } }
        );

        return BlogPost;
      }
      throw AuthenticationError;
    },
  },
};

module.exports = resolvers;

// const { User, BlogPost } = require("../models");
// const { signToken, AuthenticationError } = require("../utils/auth");

// const resolvers = {
//   Query: {
//     // Existing queries
//     users: async () => {
//       return User.find().populate("BlogPosts");
//     },
//     user: async (parent, { username }) => {
//       return User.findOne({ username }).populate("BlogPosts");
//     },
//     BlogPosts: async (parent, { username }) => {
//       const params = username ? { username } : {};
//       return BlogPost.find(params).sort({ createdAt: -1 });
//     },
//     BlogPost: async (parent, { BlogPostId }) => {
//       return BlogPost.findOne({ _id: BlogPostId });
//     },
//     me: async (parent, args, context) => {
//       if (context.user) {
//         return User.findOne({ _id: context.user._id }).populate("BlogPosts");
//       }
//       throw AuthenticationError;
//     },

//   },
//   Mutation: {
//     // Existing mutations
//     addUser: async (parent, { username, email, password }) => {
//       const user = await User.create({ username, email, password });
//       const token = signToken(user);
//       return { token, user };
//     },
//     login: async (parent, { email, password }) => {
//       const user = await User.findOne({ email });

//       if (!user) {
//         throw AuthenticationError;
//       }

//       const correctPw = await user.isCorrectPassword(password);

//       if (!correctPw) {
//         throw AuthenticationError;
//       }

//       const token = signToken(user);

//       return { token, user };
//     },
//     addblogPost: async (parent, { blogPostText }, context) => {
//       if (context.user) {
//         const BlogPost = await BlogPost.create({
//           blogPostText,
//           blogPostAuthor: context.user.username,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $addToSet: { BlogPosts: BlogPost._id } }
//         );

//         return BlogPost;
//       }
//       throw AuthenticationError;
//       ("You need to be logged in!");
//     },
//     removeBlogPost: async (parent, { BlogPostId }, context) => {
//       if (context.user) {
//         const BlogPost = await BlogPost.findOneAndDelete({
//           _id: BlogPostId,
//           blogPostAuthor: context.user.username,
//         });

//         await User.findOneAndUpdate(
//           { _id: context.user._id },
//           { $pull: { BlogPosts: BlogPost._id } }
//         );

//         return BlogPost;
//       }
//       throw AuthenticationError;
//     },
//     // New mutation for adding a lake
//     addLake: async (parent, { name, description }) => {
//       return Lake.create({ name, description });
//     },
//     // New mutation for removing a lake
//     removeLake: async (parent, { lakeId }) => {
//       return Lake.findOneAndDelete({ _id: lakeId });
//     },
//   },
// };

// module.exports = resolvers;
