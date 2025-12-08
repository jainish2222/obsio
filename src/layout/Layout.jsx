import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
