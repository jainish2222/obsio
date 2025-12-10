import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Homepage from "./pages/Homepage";
import Servicespage from "./pages/Servicespage";
import WorkCommon from "./components/work/portfolio/WorkCommon";
import Portfolio from "./components/work/portfolio/PhotoGrid";
import CaseStudies from "./components/work/case-studies/CaseStudies";
import Careers from "./components/company/careers/Careers";
import ApplyForm from "./components/company/careers/ApplyForm";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services/:tech" element={<Servicespage />} />
        <Route path="/work/portfolio" element={<WorkCommon />} />
        <Route path="/work/portfolio/:project" element={<Portfolio />} />
        <Route path="/work/case-studies" element={<CaseStudies />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/careers/apply" element={<ApplyForm />} />
      </Routes>
    </Router>
  );
}

export default App;
