import React from "react";
import Navbar from "../components/Navbar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import ScrollToTopButton from "../components/ScrollToTopButton";
import Loader from "../components/Loader";

const MainLayout = () => {
  const { state } = useNavigation();
  return (
    <div className="bg-gradient-to-r from-base-100 to-accent/5">
      <Navbar />
      <ScrollToTop />
      {state === "loading" ? <Loader /> : <Outlet />}
      <ScrollToTopButton />
      <Footer />
    </div>
  );
};

export default MainLayout;
