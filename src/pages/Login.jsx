import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { login } from "../services/authService";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await login(email, password);

      localStorage.setItem("token", response.token);

      localStorage.setItem(
        "user",
        JSON.stringify(response.user)
      );

      navigate("/");

    } catch (err) {

      setError(
        err.response?.data?.message ||
        "Login Failed"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen flex items-center justify-center">

        <div className="bg-white shadow-lg rounded-xl p-8 w-[350px]">

          <h2 className="text-3xl font-bold text-center mb-8">
            Login
          </h2>

          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-3 rounded-lg mb-4"
          />

          {error && (
            <p className="text-red-500 text-center mb-4">
              {error}
            </p>
          )}

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-green-700 text-white p-3 rounded-lg hover:bg-green-800 transition"
          >
            {loading ? "Logging In..." : "Login"}
          </button>

        </div>

      </section>

      <Footer />
    </>
  );
};

export default Login;