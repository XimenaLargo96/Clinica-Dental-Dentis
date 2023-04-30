import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Patient from "./routes/Patient";
import Dentist from "./routes/Dentist";
import Shieft from "./routes/Shieft";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="home" element={<Home />} />
          <Route path="patient" element={<Patient />} />
          <Route path="dentist" element={<Dentist />} />
          <Route path="shieft" element={<Shieft />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
