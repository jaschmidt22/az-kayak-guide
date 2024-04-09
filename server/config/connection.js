const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://jessicaschmidt22:Je$$1ca80@cluster0.spuxllz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0&tls=true"
);

module.exports = mongoose.connection;

// mongodb+srv://jessicaschmidt22:<Je$$1ca80>@cluster0.spuxllz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

// mongodb+srv://jessicaschmidt22:<password>@cluster0.spuxllz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
