import api from "./api";

// GET ALL DESTINATIONS
export const getAllDestinations = async () => {
  const response = await api.get("/destinations");
  return response.data;
};

// GET ONE DESTINATION
export const getDestinationById = async (id) => {
  const response = await api.get(`/destinations/${id}`);
  return response.data;
};

// CREATE DESTINATION
export const createDestination = async (destinationData) => {
  const response = await api.post("/destinations", destinationData);
  return response.data;
};

// UPDATE DESTINATION
export const updateDestination = async (id, destinationData) => {
  const response = await api.put(
    `/destinations/${id}`,
    destinationData
  );

  return response.data;
};

// DELETE DESTINATION
export const deleteDestination = async (id) => {
  await api.delete(`/destinations/${id}`);
};

// SEARCH DESTINATIONS
export const searchDestinations = async (query) => {
  const response = await api.get("/destinations/search", {
    params: {
      q: query,
    },
  });

  return response.data;
};