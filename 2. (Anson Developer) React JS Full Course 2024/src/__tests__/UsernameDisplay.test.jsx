import { describe, it, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from "../components/UsernameDisplay";

describe("UsernameDisplay", () => {
  it("should render username", async () => {
    render(<UsernameDisplay username="vicky5571" />);
    expect(await screen.findByText("vicky5571", {}, { timeout: 20000 })).toBeInTheDocument();
  });
});
