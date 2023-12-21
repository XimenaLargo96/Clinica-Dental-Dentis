/* eslint-disable */

import Navbar from "./Components/Navbar.jsx";
import "./App.css";
import { Outlet } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import SocialMedia from "./Components/SocialMedia.jsx";
import Footer from "./Components/Footer.jsx";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    location.pathname === "/" && navigate("/home");
  }, []);

  return (
    <>
      <SocialMedia />
      <Navbar />
      <main className="min-vh-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default App;
