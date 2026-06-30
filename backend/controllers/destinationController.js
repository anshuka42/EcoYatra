const destinations = require("../data/destinations");

// =======================================
// GET ALL DESTINATIONS
// =======================================

const getAllDestinations = (req, res) => {

  try {

    res.status(200).json({
      success: true,
      count: destinations.length,
      data: destinations,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Unable to fetch destinations",
    });

  }

};


// =======================================
// GET DESTINATION BY ID
// =======================================

const getDestinationById = (req, res) => {

  const id = Number(req.params.id);

  const destination = destinations.find(
    (item) => item.id === id
  );

  if (!destination) {

    return res.status(404).json({
      success: false,
      message: "Destination not found",
    });

  }

  res.status(200).json({
    success: true,
    data: destination,
  });

};


// =======================================
// CREATE DESTINATION
// =======================================

const createDestination = (req, res) => {

  const {

    name,
    state,
    rating,
    budget,
    days,
    category,
    image,
    description,

  } = req.body;

  if (!name || !state) {

    return res.status(400).json({

      success: false,

      message: "Name and State are required",

    });

  }

  const newDestination = {

    id: destinations.length + 1,

    name,

    state,

    rating,

    budget,

    days,

    category,

    image,

    description,

  };

  destinations.push(newDestination);

  res.status(201).json({

    success: true,

    message: "Destination Created",

    data: newDestination,

  });

};


// =======================================
// UPDATE DESTINATION
// =======================================

const updateDestination = (req, res) => {

  const id = Number(req.params.id);

  const index = destinations.findIndex(

    (item) => item.id === id

  );

  if (index === -1) {

    return res.status(404).json({

      success: false,

      message: "Destination not found",

    });

  }

  destinations[index] = {

    ...destinations[index],

    ...req.body,

  };

  res.status(200).json({

    success: true,

    message: "Destination Updated",

    data: destinations[index],

  });

};


// =======================================
// DELETE DESTINATION
// =======================================

const deleteDestination = (req, res) => {

  const id = Number(req.params.id);

  const index = destinations.findIndex(

    (item) => item.id === id

  );

  if (index === -1) {

    return res.status(404).json({

      success: false,

      message: "Destination not found",

    });

  }

  destinations.splice(index, 1);

  res.status(204).send();

};


// =======================================
// SEARCH DESTINATION
// =======================================

const searchDestination = (req, res) => {

  const query = req.query.q?.toLowerCase() || "";

  const result = destinations.filter(

    (item) =>

      item.name.toLowerCase().includes(query) ||

      item.state.toLowerCase().includes(query)

  );

  res.status(200).json({

    success: true,

    count: result.length,

    data: result,

  });

};


module.exports = {

  getAllDestinations,

  getDestinationById,

  createDestination,

  updateDestination,

  deleteDestination,

  searchDestination,

};