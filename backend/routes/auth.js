const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Register
router.post(
  "/register",
  async(req, (res, res) => {
    try {
      const { username, email, password } = req.body;
      const NewUser = new User({ username, email, password });
      const SavedUser=await NewUser.save()
      res.status(200).json(SavedUser)
    } catch (err) {
      res.status(500).json(err);
    }
  })
);
//Login

//Logout
