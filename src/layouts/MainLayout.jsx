import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopButton";

const MainLayout = () => {
  return (
    <div className="bg-gradient-to-r from-base-100 to-accent/7">
      <Navbar />
      <ScrollToTop />
      <Outlet />
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
