import React from "react";
import error from "../assets/error404.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
const Error404 = () => {
  return (
    <div className="flex items-center min-h-screen justify-center max-w-[700px] mx-auto">
      <div>
        <Lottie animationData={error} loop={true} />
        <div className="flex justify-center">
          <Link to="/browseCars" className="btn text-white btn-error">
            Browse Cars
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error404;
