import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { within } from "@testing-library/dom";
import App from "../App";

describe("when there is only 1 user", () => {
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

describe("when there are 2 users", () => {
  it("should have 2 users", () => {
    render(
      <App
        usersData={[
          {
            id: 1,
            username: "vicky5571",
            email: "vicky@gmail.com",
          },
          {
            id: 2,
            username: "milkasekar",
            email: "milkasekar@gmail.com",
          },
        ]}
      />
    );

    expect(screen.getByText("vicky5571")).toBeInTheDocument();
    expect(screen.getByText("milkasekar")).toBeInTheDocument();
  });

  it("should click edit button for 1st user and display save button", async () => {
    render(
      <App
        usersData={[
          {
            id: 1,
            username: "vicky5571",
            email: "vicky@gmail.com",
          },
          {
            id: 2,
            username: "milkasekar",
            email: "milkasekar@gmail.com",
          },
        ]}
      />
    );
    const userDetails = screen.getByTestId("user-details-1");
    expect(within(userDetails).queryByText("milkasekar")).toBeNull();
    const editBtn = within(userDetails).getByRole("button", { name: "Edit" });
    await userEvent.click(editBtn);
    expect(within(userDetails).getByRole("button", { name: "Save" })).toBeInTheDocument();
  });

  it("should edit 2nd username and save", async () => {
    render(
      <App
        usersData={[
          {
            id: 1,
            username: "vicky5571",
            email: "vicky@gmail.com",
          },
          {
            id: 2,
            username: "milkasekar",
            email: "milkasekar@gmail.com",
          },
        ]}
      />
    );
    const userDetails = screen.getByTestId("user-details-2");
    await userEvent.click(within(userDetails).getByRole("button", { name: "Edit" }));
    await userEvent.type(within(userDetails).getByLabelText("Username:"), "123");
    await userEvent.click(within(userDetails).getByRole("button", { name: "Save" }));
    expect(within(userDetails).queryByLabelText("Username:")).toBeNull();
    expect(within(userDetails).getByText("milkasekar123")).toBeInTheDocument();
  });
});
