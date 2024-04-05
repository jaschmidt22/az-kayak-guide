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
    blogpost: async (parent, { username }) => {
      const params = username ? { username } : {};
      return BlogPost.find(params).sort({ createdAt: -1 });
    },
    blogpost: async (parent, { BlogPostId }) => {
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
    addblogPost: async (parent, { blogPostText }, context) => {
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

    updateBlogPost: async (parent, { blogPostId, updatedText }, context) => {
      if (context.user) {
        try {
          const blogPost = await BlogPost.findById(blogPostId);

          if (!blogPost) {
            throw new Error("Blog post not found");
          }

          // // Check if the user is the author of the blog post
          if (blogPost.blogPostAuthor !== context.user.username) {
            throw new AuthenticationError("You are not authorized to update this blog post");
          }

          // Update the blog post text
          blogPost.blogPostText = updatedText;

          // Save the updated blog post
          const updatedBlogPost = await blogPost.save();

          return updatedBlogPost;
        } catch (error) {
          throw new Error(`Failed to update blog post: ${error.message}`);
        }
      } else {
        throw new AuthenticationError("You need to be logged in to update a blog post");
      }
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
