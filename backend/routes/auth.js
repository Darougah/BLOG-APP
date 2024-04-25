const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// REGISTER ADMIN
router.post("/register-admin", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const isAdmin = true; // Set isAdmin to true for admin user
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = new User({ username, email, password: hashedPassword, isAdmin });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

// REGISTER REGULAR USER
router.post("/register", async (req, res) => {
  try {
    const { username, email, password, isAdmin } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);
    const newUser = new User({ username, email, password: hashedPassword, isAdmin });
    const savedUser = await newUser.save();
    res.status(200).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body; // Retrieve username and password from request body

    const user = await User.findOne({ username }); // Find user by username

    if (!user) {
      return res.status(404).json("User not found!");
    }

    const match = await bcrypt.compare(password, user.password); // Compare passwords

    if (!match) {
      return res.status(401).json("Wrong credentials!");
    }

    const token = jwt.sign(
      { _id: user._id, username: user.username, email: user.email },
      process.env.SECRET,
      { expiresIn: "3d" }
    );

    const { password: _, ...info } = user._doc; // Omit password from user info
    res.cookie("token", token).status(200).json(info);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGOUT
router.get("/logout", async (req, res) => {
  try {
    res
      .clearCookie("token", { sameSite: "none", secure: true })
      .status(200)
      .send("User logged out successfully!");
  } catch (err) {
    res.status(500).json(err);
  }
});

//REFETCH USER
router.get("/refetch", (req, res) => {
  const token = req.cookies.token;
  jwt.verify(token, process.env.SECRET, {}, async (err, data) => {
    if (err) {
      return res.status(404).json(err);
    }
    res.status(200).json(data);
  });
});

module.exports = router;