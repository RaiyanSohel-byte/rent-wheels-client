import React from "react";
import notFound from "../assets/notFound.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
const NotFound = () => {
  return (
    <div className="flex items-center justify-center max-w-[400px] my-20 mx-auto">
      <div>
        <Lottie animationData={notFound} loop={true} />
        <h3 className="title text-center my-5">Page Not Found</h3>
        <div className="flex justify-center">
          <Link to="/" className="btn text-white btn-error">
            Back To Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
