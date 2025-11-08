import React from "react";
import { GiCarWheel } from "react-icons/gi";
import { Link } from "react-router";

const Logo = () => {
  return (
    <Link
      to="/"
      className="btn lobster btn-ghost text-3xl font-normal text-primary"
    >
      Rent<span className="text-secondary">Wheels</span> <GiCarWheel />
    </Link>
  );
};

export default Logo;
