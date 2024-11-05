import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import { UserPage } from "./components/pages/UserPages";
import { BlogPostsPage } from "./components/pages/BlogPostsPage";
import { routes } from "./components/utils/constants";

export const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
