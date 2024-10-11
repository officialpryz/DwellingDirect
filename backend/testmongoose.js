const mongoose = require("mongoose");
require("dotenv").config();

const uri =
  "mongodb+srv://kaanyi:OyEzQP2PA2JfiOs0@cluster0.9dctm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Database connected successfully");
    mongoose.connection.close(); // Close connection after test
  })
  .catch((error) => {
    console.error("Database connection error:", error);
  });
