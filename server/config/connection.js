const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb+srv://jessicaschmidt22:Sammi226@cluster0.spuxllz.mongodb.net/az-kayak-guide?retryWrites=true&w=majority&appName=Cluster0"
);

module.exports = mongoose.connection;

//mongodb+srv://jessicaschmidt22:Sammi226@cluster0.spuxllz.mongodb.net/az-kayak-guide?retryWrites=true&w=majority&appName=Cluster0
