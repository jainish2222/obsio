import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Homepage from "./pages/Homepage";
import Servicespage from "./pages/Servicespage"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services/:id" element={<Servicespage />} />

      </Routes>
    </Router>
  );
}

export default App;
