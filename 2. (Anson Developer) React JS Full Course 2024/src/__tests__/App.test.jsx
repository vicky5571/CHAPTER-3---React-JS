import { expect, it, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("should render users", () => {
    render(<App />);
  });
});
