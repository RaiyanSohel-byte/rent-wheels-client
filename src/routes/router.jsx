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
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import MyListings from "../pages/MyListings";
import MyBookings from "../pages/MyBookings";
import Error404 from "../pages/Error404";

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
        element: (
          <PrivateRoute>
            <AddCar />
          </PrivateRoute>
        ),
      },
      {
        path: "/carDetails/:id",
        element: (
          <PrivateRoute>
            <CarDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/myListings",
        element: (
          <PrivateRoute>
            <MyListings />
          </PrivateRoute>
        ),
      },
      {
        path: "/browseCars",
        element: <BrowseCars />,
      },
      {
        path: "/myBookings",
        element: (
          <PrivateRoute>
            <MyBookings />
          </PrivateRoute>
        ),
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
  {
    path: "*",
    element: <Error404 />,
  },
]);
