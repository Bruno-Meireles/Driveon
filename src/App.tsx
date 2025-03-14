import "./styles/Reset.css";
import "./styles/colors.css";
import "./styles/global.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Drivers from "./pages/Drivers/Drivers";
import Passengers from "./pages/Passengers/Passengers";
import AboutUs from "./pages/About/About";
import Contact from "./pages/Contato/Contato";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/drivers" element={<Drivers />} />
        <Route path="/passengers" element={<Passengers />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
