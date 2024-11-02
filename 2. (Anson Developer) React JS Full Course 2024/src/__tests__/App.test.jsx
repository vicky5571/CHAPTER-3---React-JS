import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

describe("App", () => {
  it("should render users", () => {
    const { container } = render(<App usersData={[]} />);
    expect(container).toMatchSnapshot();
  });

  describe("Edit Button is Clicked", () => {
    it("should render save button", async () => {
      render(
        <App
          usersData={[
            {
              id: 1,
              username: "vicky5571",
              email: "vicky@gmail.com",
            },
          ]}
        />
      );
      const editButton = screen.getByRole("button", { name: "Edit" });
      await userEvent.click(editButton);
      const saveButton = screen.getByRole("button", { name: "Save" });
      expect(saveButton).toBeInTheDocument();
    });

    it("should display username & email input fields", async () => {
      render(
        <App
          usersData={[
            {
              id: 1,
              username: "vicky5571",
              email: "vicky@gmail.com",
            },
          ]}
        />
      );
      const editButton = screen.getByRole("button", { name: "Edit" });
      await userEvent.click(editButton);
      expect(screen.getByLabelText("Username:")).toBeInTheDocument();
      expect(screen.getByLabelText("Email:")).toBeInTheDocument();
      //   expect(screen.getByRole("textbox", { name: "username" })).toBeInTheDocument();
      //   expect(screen.getByRole("textbox", { name: "email" })).toBeInTheDocument();
    });
  });
});
