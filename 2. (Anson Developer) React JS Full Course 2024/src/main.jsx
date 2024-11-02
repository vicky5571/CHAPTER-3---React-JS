import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./globals.css";
import { UserPage } from "./components/pages/UserPages";
import { BlogPostsPage } from "./components/pages/BlogPostsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <App
        usersData={[
          {
            id: 1,
            username: "vicky5571",
            email: "vicky@gmail.com",
          },
          {
            id: 2,
            username: "tabita",
            email: "tabita@gmail.com",
          },
        ]}
      />
    ),
    children: [
      {
        path: "users",
        element: <UserPage />,
      },
      {
        path: "/blog-posts",
        element: <BlogPostsPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
