import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
