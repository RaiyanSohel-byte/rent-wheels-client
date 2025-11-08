import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { GiCarWheel, GiHamburgerMenu } from "react-icons/gi";
import logoDark from "../assets/logoDark.png";
import logoLight from "../assets/logoLight.png";
const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  const links = (
    <>
      <li>
        <NavLink>Home</NavLink>
      </li>
      <li>
        <NavLink>Add Car</NavLink>
      </li>
      <li>
        <NavLink>My Listings</NavLink>
      </li>
      <li>
        <NavLink>My Bookings</NavLink>
      </li>
      <li>
        <NavLink>Browse Cars</NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-200 shadow-sm text-primary fixed top-0 left-0 w-full z-[100]">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow font-semibold"
            >
              {links}
            </ul>
          </div>
          <img
            className="w-[200px]"
            src={theme === "dark" ? logoDark : logoLight}
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">{links}</ul>
        </div>
        <div className="navbar-end gap-3">
          <input
            type="checkbox"
            defaultChecked={localStorage.getItem("theme") === "dark"}
            className="toggle toggle-md"
            onChange={(e) => handleTheme(e.target.checked)}
          />
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-14 rounded-full border-2 border-primary">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-200 rounded-box z-1 mt-3 w-52 p-2 shadow-md border border-primary"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
