import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Homepage from "./pages/Homepage";
import Servicespage from "./pages/Servicespage"
import WorkCommon from "./components/work/portfolio/WorkCommon"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services/:tech" element={<Servicespage />} />
        <Route path="/work/:id" element={<WorkCommon />} />
      </Routes>
    </Router>
  );
}

export default App;
