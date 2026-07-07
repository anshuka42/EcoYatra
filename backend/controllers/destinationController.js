const prisma = require("../lib/prisma");

// =======================================
// GET ALL DESTINATIONS
// =======================================

const getAllDestinations = async (req, res) => {
  try {
    const destinations = await prisma.destination.findMany({
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json({
      success: true,
      count: destinations.length,
      data: destinations,
    });
  } catch (error) {
    console.error("GET ALL ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch destinations",
    });
  }
};

// =======================================
// GET DESTINATION BY ID
// =======================================

const getDestinationById = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const destination = await prisma.destination.findUnique({
      where: {
        id: id,
      },
    });

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
  } catch (error) {
    console.error("GET BY ID ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to fetch destination",
    });
  }
};

// =======================================
// CREATE DESTINATION
// =======================================

const createDestination = async (req, res) => {
  try {
    const {
      name,
      state,
      description,
      image,
      category,
      bestTime,
      duration,
      days,
      price,
      budget,
      rating,
      ecoRating,
      activities,
      featured,
    } = req.body;

    if (!name || !state) {
      return res.status(400).json({
        success: false,
        message: "Name and State are required",
      });
    }

    const newDestination = await prisma.destination.create({
      data: {
        name,
        state,
        description: description || "",
        image: image || "",
        category: category || "General",
        bestTime: bestTime || "All year",
        duration: duration || days || "3 days",
        price: Number(price ?? budget ?? 0),
        rating: Number(rating ?? 0),
        ecoRating: Number(ecoRating ?? 0),
        activities: Array.isArray(activities) ? activities : [],
        featured: Boolean(featured),
      },
    });

    res.status(201).json({
      success: true,
      message: "Destination Created",
      data: newDestination,
    });
  } catch (error) {
    console.error("CREATE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to create destination",
    });
  }
};

// =======================================
// UPDATE DESTINATION
// =======================================

const updateDestination = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const existingDestination = await prisma.destination.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingDestination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    const {
      name,
      state,
      description,
      image,
      category,
      bestTime,
      duration,
      days,
      price,
      budget,
      rating,
      ecoRating,
      activities,
      featured,
    } = req.body;

    const updateData = {};

    if (name !== undefined) updateData.name = name;
    if (state !== undefined) updateData.state = state;
    if (description !== undefined) updateData.description = description;
    if (image !== undefined) updateData.image = image;
    if (category !== undefined) updateData.category = category;
    if (bestTime !== undefined) updateData.bestTime = bestTime;

    if (duration !== undefined || days !== undefined) {
      updateData.duration = duration || days;
    }

    if (price !== undefined || budget !== undefined) {
      updateData.price = Number(price ?? budget);
    }

    if (rating !== undefined) {
      updateData.rating = Number(rating);
    }

    if (ecoRating !== undefined) {
      updateData.ecoRating = Number(ecoRating);
    }

    if (activities !== undefined) {
      updateData.activities = Array.isArray(activities)
        ? activities
        : [];
    }

    if (featured !== undefined) {
      updateData.featured = Boolean(featured);
    }

    const updatedDestination = await prisma.destination.update({
      where: {
        id: id,
      },
      data: updateData,
    });

    res.status(200).json({
      success: true,
      message: "Destination Updated",
      data: updatedDestination,
    });
  } catch (error) {
    console.error("UPDATE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to update destination",
    });
  }
};

// =======================================
// DELETE DESTINATION
// =======================================

const deleteDestination = async (req, res) => {
  try {
    const id = Number(req.params.id);

    const existingDestination = await prisma.destination.findUnique({
      where: {
        id: id,
      },
    });

    if (!existingDestination) {
      return res.status(404).json({
        success: false,
        message: "Destination not found",
      });
    }

    await prisma.destination.delete({
      where: {
        id: id,
      },
    });

    res.status(204).send();
  } catch (error) {
    console.error("DELETE ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to delete destination",
    });
  }
};

// =======================================
// SEARCH DESTINATION
// =======================================

const searchDestination = async (req, res) => {
  try {
    const query = req.query.q || "";

    const result = await prisma.destination.findMany({
      where: {
        OR: [
          {
            name: {
              contains: query,
              mode: "insensitive",
            },
          },
          {
            state: {
              contains: query,
              mode: "insensitive",
            },
          },
        ],
      },
      orderBy: {
        id: "asc",
      },
    });

    res.status(200).json({
      success: true,
      count: result.length,
      data: result,
    });
  } catch (error) {
    console.error("SEARCH ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Unable to search destinations",
    });
  }
};

module.exports = {
  getAllDestinations,
  getDestinationById,
  createDestination,
  updateDestination,
  deleteDestination,
  searchDestination,
};