import React from "react";
import empty from "../assets/emptyList.json";
import Lottie from "lottie-react";
import { Link } from "react-router";
const EmptyList = ({ pageText, btnText, toRoute, handleClear }) => {
  return (
    <div>
      <Lottie
        className="max-w-[300px] mx-auto"
        animationData={empty}
        loop={true}
      ></Lottie>
      <h3 className="text-center title text-error mb-8">{pageText}</h3>
      <div className="flex justify-center">
        <Link
          onClick={btnText === "Clear Search" && handleClear}
          to={toRoute}
          className="btn text-white btn-error"
        >
          {btnText}
        </Link>
      </div>
    </div>
  );
};

export default EmptyList;
