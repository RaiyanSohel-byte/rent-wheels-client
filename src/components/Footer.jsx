import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logoLight from "../assets/logoLight.png";
import logoDark from "../assets/logoDark.png";
import useTheme from "../hooks/useTheme";
import { Link } from "react-router";

const Footer = () => {
  const { theme } = useTheme();
  return (
    <footer className="relative w-full bg-base-200/50 backdrop-blur-xl border-t border-white/10 text-base-content py-10 px-6">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start space-y-3">
          <img
            src={theme === "dark" ? logoDark : logoLight}
            alt="RentWheels Logo"
            className="w-32"
          />

          <p className="text-gray-400 max-w-[200px]">
            The easiest way to rent cars from trusted local providers.
          </p>
          <ul className="space-y-1 text-gray-400">
            <li>
              <span className="text-primary">Email</span>:
              support@rentwheels.com
            </li>
            <li>
              <span className="text-primary">Phone</span>: +880 1234 567 890
            </li>
            <li>
              <span className="text-primary">Address</span>: Dhaka, Bangladesh
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Site Map</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <Link to="/" className="hover:text-accent transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-accent transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-accent transition-colors"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/myListings"
                className="hover:text-accent transition-colors"
              >
                My Listings
              </Link>
            </li>
            <li>
              <Link
                to="/myBookings"
                className="hover:text-accent transition-colors"
              >
                My Bookings
              </Link>
            </li>
            <li>
              <Link to="/cars" className="hover:text-accent transition-colors">
                Brows Cars
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg mb-3">Legal</h3>
          <ul className="space-y-1 text-gray-400">
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-accent transition-colors">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-accent transition-colors"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 border-t border-primary/10 pt-5 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} RentWheels. All Rights Reserved.{" "}
        <br />
        Made with ❤️ and coded by Raiyan Sohel.
      </div>
    </footer>
  );
};

export default Footer;
