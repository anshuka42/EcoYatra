const express = require("express");
const validateDestination = require("../validators/destinationValidator");
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

router.post("/", validateDestination, createDestination);

// PUT

router.put("/:id", updateDestination);


// DELETE

router.delete("/:id", deleteDestination);

module.exports = router;