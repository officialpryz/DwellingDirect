const express = require("express");
const dbConnect = require("./config/dbConnect");
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT || 3000;
dbConnect();

app.use("/", (req, res) => {
  res.send("Hello from the server side!");
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
