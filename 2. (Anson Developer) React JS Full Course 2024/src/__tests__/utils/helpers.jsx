import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routes } from "../../components/utils/constants";
import { render } from "@testing-library/react";

export const renderWithRouter = ({ initialEntries: [], initialIndex = 0 }) => {
  const router = createMemoryRouter(routes, {
    initialEntries,
    initialIndex,
  });

  return render(<RouterProvider router={router} />);
};
