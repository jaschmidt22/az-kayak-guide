const { Schema, model } = require("mongoose");

const blogPostSchema = new Schema({
  title: String,
  blogPostText: String,
  blogPostAuthor: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
  createdAt: {
    type: Date,
    default: Date.now()
  }
});

const BlogPost = model("BlogPost", blogPostSchema);

module.exports = BlogPost;
