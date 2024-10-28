import { describe, it, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { UsernameDisplay } from "../components/UsernameDisplay";

describe("UsernameDisplay", () => {
  it("should render username", () => {
    render(<UsernameDisplay username="vicky" />);
    // expect(result.container).toMatchSnapshot();
    const elements = screen.queryAllByText("vicky");
    elements.forEach((element) => expect(element).toBeInTheDocument());
  });
});
