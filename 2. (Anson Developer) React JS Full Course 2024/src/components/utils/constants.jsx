import App from "../App";
import { BlogPostsPage } from "../pages/BlogPostsPage";
import { UserPage } from "../pages/UserPages";

export const routes = [
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
];
