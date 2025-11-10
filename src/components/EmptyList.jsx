import React from "react";
import empty from "../assets/emptyList.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
const EmptyList = ({ pageText }) => {
  return (
    <div>
      <Lottie
        className="max-w-[300px] mx-auto"
        animationData={empty}
        loop={true}
      ></Lottie>
      <h3 className="text-center title text-error mb-4">{pageText}</h3>
      <div className="flex justify-center">
        <Link to="/browseCars" className="btn text-white btn-error">
          Browse Cars
        </Link>
      </div>
    </div>
  );
};

export default EmptyList;
