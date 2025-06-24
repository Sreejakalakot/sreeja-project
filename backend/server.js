const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/auth");

const app = express();

// Allow requests from your React frontend
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

// Middleware to parse JSON bodies
app.use(express.json());

// Auth route setup
app.use("/api/auth", authRoutes);

// Connect MongoDB and start server
const startServer = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/auth-project", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ MongoDB Connected");

    app.listen(5000, () => {
      console.log("🚀 Server running on port 5000");
    });
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
  }
};

startServer();
