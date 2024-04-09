const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/az-kayak-guide"
);

module.exports = mongoose.connection;





mongodb+srv://jessicaschmidt22:<password>@cluster0.spuxllz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0