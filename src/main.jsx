import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { router } from "./routes/router.jsx";
import AuthProvider from "./contexts/authContext/AuthProvider.jsx";
import ThemeProvider from "./contexts/ThemeContext/ThemeProvider.jsx";
import { ToastContainer } from "react-toastify";
import SearchProvider from "./contexts/SearchContext/SearchProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SearchProvider>
      <ThemeProvider>
        <AuthProvider>
          <RouterProvider router={router} />
        </AuthProvider>
        <ToastContainer theme="colored" />
      </ThemeProvider>
    </SearchProvider>
  </StrictMode>
);
