import React, { useEffect } from "react";
import { Link, NavLink } from "react-router";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiLoginBoxFill } from "react-icons/ri";
import logoDark from "../assets/logoDark.png";
import logoLight from "../assets/logoLight.png";
import useTheme from "../hooks/useTheme";
import useAuth from "../hooks/useAuth";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
const Navbar = () => {
  const { user, logOutUser } = useAuth();
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  const handleTheme = (checked) => {
    setTheme(checked ? "dark" : "light");
  };
  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#22C55E",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Log Out!",
      theme: `${theme === "dark" ? "dark" : "light"}`,
    }).then((result) => {
      if (result.isConfirmed) {
        logOutUser()
          .then(() => {})
          .catch((error) => {
            toast.error(error.code);
          });
        Swal.fire({
          title: "Logged Out!",
          text: "You have been logged out.",
          icon: "success",
          theme: `${theme === "dark" ? "dark" : "light"}`,
          confirmButtonColor: "#22C55E",
        });
      }
    });
  };
  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold border-b-2 border-accent"
              : "text-base-content hover:text-accent transition-colors"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/browseCars"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold border-b-2 border-accent"
              : "text-base-content hover:text-accent transition-colors"
          }
        >
          Browse Cars
        </NavLink>
      </li>
      {user && (
        <>
          <li>
            <NavLink
              to="/addCar"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-bold border-b-2 border-accent"
                  : "text-base-content hover:text-accent transition-colors"
              }
            >
              Add Car
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/myListings"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-bold border-b-2 border-accent"
                  : "text-base-content hover:text-accent transition-colors"
              }
            >
              My Listings
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/myBookings"
              className={({ isActive }) =>
                isActive
                  ? "text-accent font-bold border-b-2 border-accent"
                  : "text-base-content hover:text-accent transition-colors"
              }
            >
              My Bookings
            </NavLink>
          </li>
        </>
      )}
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold border-b-2 border-accent"
              : "text-base-content hover:text-accent transition-colors"
          }
        >
          About
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-accent font-bold border-b-2 border-accent"
              : "text-base-content hover:text-accent transition-colors"
          }
        >
          Contact
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="bg-base-200 shadow-sm text-primary fixed top-0 left-0 w-full z-100">
      <div className="navbar max-w-[1440px] mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <GiHamburgerMenu />
            </div>
            <ul
              tabIndex="-1"
              className="menu dropdown-content bg-base-200 rounded-xl z-50 mt-3 w-56 p-4 shadow-lg border border-primary font-semibold space-y-2"
            >
              {links}
            </ul>
          </div>
          <Link to="/">
            <img
              className="w-32"
              src={theme === "dark" ? logoDark : logoLight}
              alt=""
            />
          </Link>
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
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar hover:ring-1 hover:ring-accent hover:ring-offset-2 transition-all"
              >
                <div className="w-14 rounded-full border-2 border-primary">
                  <img
                    alt="Tailwind CSS Navbar component"
                    src={user.photoURL}
                  />
                </div>
              </div>
              <ul
                tabIndex="-1"
                className="menu dropdown-content bg-base-200 rounded-xl z-50 mt-3 w-64 p-4 shadow-lg border border-primary"
              >
                <li className="mb-2">
                  <div className="flex items-center gap-1 p-2 bg-base-100 rounded-lg">
                    <img
                      src={user.photoURL}
                      alt="User Avatar"
                      className="w-12 h-12 rounded-full border-2 border-primary"
                    />
                    <div className="flex flex-col">
                      <span className="font-semibold text-primary">
                        {user.displayName}
                      </span>
                      <span className="text-xs text-gray-400">
                        {user.email}
                      </span>
                    </div>
                  </div>
                </li>

                <li className="border-t border-primary/20 my-2"></li>

                <li>
                  <button
                    onClick={handleLogout}
                    className="btn btn-sm w-full bg-primary text-base-100 hover:bg-primary/90 transition-all"
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link
              to="/login"
              className="btn btn-sm lg:btn-md btn-primary btn-outline hover:text-secondary"
            >
              <RiLoginBoxFill /> Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
