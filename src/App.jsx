import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/home/Navbar";
import Footer from "./components/home/Footer";
import Homepage from "./pages/Homepage";
import Servicespage from "./pages/Servicespage";
import WorkCommon from "./components/work/portfolio/WorkCommon";
import Portfolio from "./components/work/portfolio/PhotoGrid";
import CaseStudies from "./components/work/case-studies/CaseStudies";
import Careers from "./components/company/careers/Careers";
import ApplyForm from "./components/company/careers/ApplyForm";
import About from "./components/company/about/About";
import Team from "./components/company/team/Team";
import Contact from "./components/company/contact/Contact";
import IndustryPage from "./components/industries/IndustryPage";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import Privacy from "./components/support/privacy";
import Terms from "./components/support/terms";
import Refund from "./components/support/refund";


function App() {
  return (
    <Router>
      <ScrollToTop />   
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/services/:tech" element={<Servicespage />} />
        <Route path="/work/portfolio" element={<WorkCommon />} />
        <Route path="/work/portfolio/:category/:project" element={<Portfolio />} />
        <Route path="/work/case-studies" element={<CaseStudies />} />
        <Route path="/company/careers" element={<Careers />} />
        <Route path="/company/careers/apply" element={<ApplyForm />} />
        <Route path="/company/about-us" element={<About />} />
        <Route path="/company/contact-us" element={<Contact />} />
        <Route path="/company/teams" element={<Team />} />
        <Route path="/industry/:field" element={<IndustryPage />} />
        <Route path="/support/privacy-policy" element={<Privacy />} />
        <Route path="/support/terms-and-conditions" element={<Terms />} />
        <Route path="/support/refund-policy" element={<Refund />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
