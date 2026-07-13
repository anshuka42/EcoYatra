const express = require("express");
const protect = require("../middleware/authMiddleware");
const {
  registerValidation,
  loginValidation,
} = require("../validators/authValidator");

const validateRequest = require("../middleware/validateRequest");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getProfile,
} = require("../controllers/authController");

// router.post("/register", registerUser);

// router.post("/login", loginUser);

router.post(
  "/register",
  registerValidation,
  validateRequest,
  registerUser
);

router.post(
  "/login",
  loginValidation,
  validateRequest,
  loginUser
);


router.get("/profile", protect, getProfile);

module.exports = router;