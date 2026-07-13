import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Destinations from "./pages/Destinations";
import Login from "./pages/Login";
import ManageDestinations from "./pages/ManageDestinations";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />

        <Route path="/destinations" element={<Destinations />} />

        <Route path="/login" element={<Login />} />

        <Route
          path="/manage-destinations"
          element={
            <ProtectedRoute>
              <ManageDestinations />
            </ProtectedRoute>
          }
        />

      </Routes>

    </BrowserRouter>

  );

}

export default App;