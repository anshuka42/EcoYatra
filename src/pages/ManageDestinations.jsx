import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  getAllDestinations,
  createDestination,
  updateDestination,
  deleteDestination,
} from "../services/destinationService";

const emptyForm = {
  name: "",
  state: "",
  description: "",
  image: "",
  category: "",
  bestTime: "",
  duration: "",
  price: "",
  rating: "",
  ecoRating: "",
  activities: "",
  featured: false,
};

const ManageDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [formData, setFormData] = useState(emptyForm);
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const fetchDestinations = async () => {
    try {
      setLoading(true);

      const response = await getAllDestinations();

      setDestinations(response.data);
    } catch (error) {
      console.error(error);
      setMessage("Unable to load destinations.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDestinations();
  }, []);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const destinationData = {
        ...formData,
        price: Number(formData.price),
        rating: Number(formData.rating),
        ecoRating: Number(formData.ecoRating),

        activities: formData.activities
          .split(",")
          .map((activity) => activity.trim())
          .filter(Boolean),
      };

      if (editingId) {
        await updateDestination(editingId, destinationData);
        setMessage("Destination updated successfully.");
      } else {
        await createDestination(destinationData);
        setMessage("Destination created successfully.");
      }

      setFormData(emptyForm);
      setEditingId(null);

      await fetchDestinations();
    } catch (error) {
      console.error(error);
      setMessage("Operation failed. Please try again.");
    }
  };

  const handleEdit = (destination) => {
    setEditingId(destination.id);

    setFormData({
      name: destination.name,
      state: destination.state,
      description: destination.description,
      image: destination.image,
      category: destination.category,
      bestTime: destination.bestTime,
      duration: destination.duration,
      price: destination.price,
      rating: destination.rating,
      ecoRating: destination.ecoRating,
      activities: destination.activities.join(", "),
      featured: destination.featured,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleDelete = async (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this destination?"
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteDestination(id);

      setMessage("Destination deleted successfully.");

      await fetchDestinations();
    } catch (error) {
      console.error(error);
      setMessage("Unable to delete destination.");
    }
  };

  const handleCancelEdit = () => {
    setEditingId(null);
    setFormData(emptyForm);
    setMessage("");
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-gray-50 px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-green-700">
              EcoYatra Database Management
            </p>

            <h1 className="text-4xl font-bold text-gray-900">
              Manage Destinations
            </h1>

            <p className="mt-3 text-gray-600">
              Create, view, update and delete destinations stored in PostgreSQL.
            </p>
          </div>

          {message && (
            <div className="mb-8 rounded-xl bg-green-100 px-5 py-4 text-green-800">
              {message}
            </div>
          )}

          <section className="mb-14 rounded-2xl bg-white p-8 shadow-md">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              {editingId ? "Update Destination" : "Create Destination"}
            </h2>

            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 gap-5 md:grid-cols-2"
            >
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Destination name"
                required
                className="rounded-lg border p-3"
              />

              <input
                name="state"
                value={formData.state}
                onChange={handleChange}
                placeholder="State"
                required
                className="rounded-lg border p-3"
              />

              <input
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="Category"
                className="rounded-lg border p-3"
              />

              <input
                name="bestTime"
                value={formData.bestTime}
                onChange={handleChange}
                placeholder="Best time to visit"
                className="rounded-lg border p-3"
              />

              <input
                name="duration"
                value={formData.duration}
                onChange={handleChange}
                placeholder="Duration, e.g. 4 days"
                className="rounded-lg border p-3"
              />

              <input
                name="price"
                type="number"
                value={formData.price}
                onChange={handleChange}
                placeholder="Price"
                className="rounded-lg border p-3"
              />

              <input
                name="rating"
                type="number"
                step="0.1"
                value={formData.rating}
                onChange={handleChange}
                placeholder="Rating"
                className="rounded-lg border p-3"
              />

              <input
                name="ecoRating"
                type="number"
                step="0.1"
                value={formData.ecoRating}
                onChange={handleChange}
                placeholder="Eco rating"
                className="rounded-lg border p-3"
              />

              <input
                name="image"
                value={formData.image}
                onChange={handleChange}
                placeholder="Image path"
                className="rounded-lg border p-3"
              />

              <input
                name="activities"
                value={formData.activities}
                onChange={handleChange}
                placeholder="Activities separated by commas"
                className="rounded-lg border p-3"
              />

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder="Description"
                rows="4"
                className="rounded-lg border p-3 md:col-span-2"
              />

              <label className="flex items-center gap-3">
                <input
                  name="featured"
                  type="checkbox"
                  checked={formData.featured}
                  onChange={handleChange}
                />

                Featured destination
              </label>

              <div className="flex gap-3 md:col-span-2">
                <button
                  type="submit"
                  className="rounded-lg bg-green-700 px-6 py-3 font-semibold text-white"
                >
                  {editingId ? "Update Destination" : "Create Destination"}
                </button>

                {editingId && (
                  <button
                    type="button"
                    onClick={handleCancelEdit}
                    className="rounded-lg border px-6 py-3 font-semibold"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </section>

          <section>
            <h2 className="mb-6 text-2xl font-bold text-gray-900">
              Stored Destinations ({destinations.length})
            </h2>

            {loading ? (
              <p>Loading destinations...</p>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                {destinations.map((destination) => (
                  <article
                    key={destination.id}
                    className="rounded-2xl bg-white p-6 shadow-md"
                  >
                    <div className="mb-4">
                      <p className="text-sm font-semibold text-green-700">
                        ID: {destination.id}
                      </p>

                      <h3 className="text-2xl font-bold text-gray-900">
                        {destination.name}
                      </h3>

                      <p className="text-gray-600">{destination.state}</p>
                    </div>

                    <p className="mb-4 text-gray-700">
                      {destination.description}
                    </p>

                    <div className="mb-5 grid grid-cols-2 gap-2 text-sm text-gray-600">
                      <span>Category: {destination.category}</span>
                      <span>Price: ₹{destination.price}</span>
                      <span>Duration: {destination.duration}</span>
                      <span>Rating: {destination.rating}</span>
                    </div>

                    <div className="flex gap-3">
                      <button
                        onClick={() => handleEdit(destination)}
                        className="rounded-lg bg-amber-500 px-4 py-2 font-semibold text-white"
                      >
                        Edit
                      </button>

                      <button
                        onClick={() => handleDelete(destination.id)}
                        className="rounded-lg bg-red-600 px-4 py-2 font-semibold text-white"
                      >
                        Delete
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            )}
          </section>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ManageDestinations;