import { describe, it, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from "../components/UsernameDisplay";

describe("UsernameDisplay", () => {
  it("should render username", () => {
    render(<UsernameDisplay username="vicky" />);
    expect(screen.queryByText("vicky")).toBeNull();
  });
});
