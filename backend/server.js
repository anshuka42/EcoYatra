const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");
dotenv.config();

// Database connection
// const connectDB = require("./config/db");

// Routes
const destinationRoutes = require("./routes/destinationRoutes");

// Middleware
const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

// Body parser
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "Welcome to EcoYatra Backend API",
  });
});

// API routes
app.use("/api/destinations", destinationRoutes);

app.use("/api/auth", authRoutes);

// 404 Middleware
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

// Start server only after database connection succeeds
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});