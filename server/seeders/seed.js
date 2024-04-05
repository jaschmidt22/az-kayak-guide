const db = require("../config/connection");
const { User, BlogPost } = require("../models");
const userSeeds = require("./userSeeds.json");
const blogPostSeeds = require("./blogPostSeeds.json");
const cleanDB = require("./cleanDB");

db.once("open", async () => {
  try {
    await cleanDB("User", "users");
    await cleanDB("BlogPost", "blogposts");

    // Seed users
    await User.create(userSeeds);
    console.log("Users seeded:", userSeeds);

    // Seed blog posts
    for (let blogPostSeed of blogPostSeeds) {
      // Find the user associated with the blog post by username
      const user = await User.findOne({
        username: blogPostSeed.blogPostAuthor,
      });

      if (!user) {
        console.error(
          `User '${blogPostSeed.blogPostAuthor}' not found for blog post.`
        );
        continue; // Skip this blog post if user not found
      }

      // Create the blog post and associate it with the user
      await BlogPost.create({
        blogPostText: blogPostSeed.blogPostText,
        blogPostAuthor: user._id, // Associate with user's ID
      });
    }

    console.log("All done!");
    process.exit(0);
  } catch (err) {
    console.error("Seeding error:", err);
    process.exit(1);
  }
});
