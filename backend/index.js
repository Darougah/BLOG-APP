const express = require("express");
const mongoose = require("mongoose");
const app = express();

//database
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017");
    console.log("database is connected successfully!");
  } catch (err) {
    console.log(err);
  }
};

//middlewares

app.listen(5000, () => {
  connectDB();
  console.log("app is running on port 5000");
});
