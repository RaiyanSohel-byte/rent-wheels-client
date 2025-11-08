import React from "react";
import { FadeLoader } from "react-spinners";
const Loader = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <FadeLoader color="#db2553" />
    </div>
  );
};

export default Loader;
