const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const cookieParser = require("cookie-parser");
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const postRoute = require("./routes/posts");
const commentRoute = require("./routes/comments");

// Load environment variables
dotenv.config();

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Database is connected successfully!");
  } catch (err) {
    console.error("Error connecting to database:", err);
  }
};

// Middleware setup
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);
app.use("/api/comments", commentRoute);

// Image upload
const storage = multer.diskStorage({
  destination: (req, file, fn) => {
    fn(null, "images");
  },
  filename: (req, file, fn) => {
    fn(null, req.body.img);
  },
});

const upload = multer({ storage: storage });
app.post("/api/upload", upload.single("file"), (req, res) => {
  res.status(200).json("Image has been uploaded successfully!");
});

// Register admin user if not exists
const User = require("./models/User");
const bcrypt = require("bcrypt");

const registerAdmin = async () => {
  try {
    const existingAdmin = await User.findOne({ email: "Admin@example.com" });
    if (!existingAdmin) {
      const hashedPassword = await bcrypt.hash("Admin", 10);
      const adminUser = new User({
        username: "Admin",
        email: "Admin@example.com",
        password: hashedPassword,
        isAdmin: true,
      });
      await adminUser.save();
      console.log("Admin user created successfully!");
    } else {
      console.log("Admin user already exists.");
    }
  } catch (error) {
    console.error("Error creating admin user:", error);
  }
};

// Start the server and register admin user
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  connectDB();
  registerAdmin();
  console.log("App is running on port " + PORT);
});
