import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import Loader from "../components/Loader";
import About from "../pages/About";
import Contact from "../pages/Contact";
import PrivacyPolicyPage from "../pages/PrivacyPolicyPage";
import RefundPolicy from "../pages/RefundPolicy";
import TermsAndConditions from "../pages/TermsAndConditions";
import AddCar from "../pages/AddCar";
import CarDetails from "../pages/CarDetails";
import BrowseCars from "../pages/BrowseCars";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/addCar",
        element: <AddCar />,
      },
      {
        path: "/carDetails/:id",
        element: <CarDetails />,
      },
      {
        path: "/browseCars",
        element: <BrowseCars />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/privacyPolicy",
        element: <PrivacyPolicyPage />,
      },
      {
        path: "/refundPolicy",
        element: <RefundPolicy />,
      },
      {
        path: "/termsAndConditions",
        element: <TermsAndConditions />,
      },
    ],
  },
]);
