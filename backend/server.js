const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const destinationRoutes = require("./routes/destinationRoutes");

const notFound = require("./middleware/notFound");
const errorHandler = require("./middleware/errorHandler");

const app = express();

app.use(
    cors({
        origin: "http://localhost:5173",
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
);

app.use(express.json());

app.get("/", (req, res) => {

    res.status(200).json({

        success: true,

        message: "Welcome to EcoYatra Backend API",

    });

});

app.use("/api/destinations", destinationRoutes);

// 404 Middleware
app.use(notFound);

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {

    console.log(`Server running on http://localhost:${PORT}`);

});