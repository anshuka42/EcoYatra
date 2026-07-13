const express = require("express");
const validateDestination = require("../validators/destinationValidator");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

const {

  getAllDestinations,

  getDestinationById,

  createDestination,

  updateDestination,

  deleteDestination,

  searchDestination,

} = require("../controllers/destinationController");


// SEARCH

router.get("/search", searchDestination);


// GET ALL

router.get("/", getAllDestinations);


// GET SINGLE

router.get("/:id", getDestinationById);


// POST

// router.post("/", validateDestination, createDestination);
router.post(
  "/",
  protect,
  createDestination
);

// PUT

router.put(
  "/:id",
  protect,
  updateDestination
);

// DELETE

router.delete(
  "/:id",
  protect,
  deleteDestination
);
module.exports = router;