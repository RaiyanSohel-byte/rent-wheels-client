import React from "react";
import error from "../assets/error404.json";
import Lottie from "lottie-react";
const Error404 = () => {
  return (
    <div className="flex h-screen items-center justify-center max-w-[1000px] mx-auto">
      <Lottie color=" #fb7185" animationData={error} loop={true} />
    </div>
  );
};

export default Error404;
