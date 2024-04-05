const { Schema, model } = require("mongoose");

const blogPostSchema = new Schema({
  blogPostText: String,
  blogPostAuthor: {
    type: Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
  },
});

const BlogPost = model("BlogPost", blogPostSchema);

module.exports = BlogPost;
