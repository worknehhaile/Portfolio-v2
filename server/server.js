
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const contactRoutes = require("./routes/contactRoutes");

// Middleware
app.use(cors());
app.use(cors({
  origin: [
    "http://localhost:5000",
    "https://portfolio-v2-i2f4jm0bl-worknehhailes-projects.vercel.app/"
  ],
  credentials: true
}));
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Contact route
app.use("/api/contact", contactRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log(`MongoDB connected: ${process.env.MONGO_URI}`);
  })
  .catch((err) => {
    console.log(err);
  });

// Start server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});