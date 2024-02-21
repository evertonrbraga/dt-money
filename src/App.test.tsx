import { render } from "@testing-library/react";
import { App } from "./App";

describe("<App />", () => {
  it("should check if the App component renders correctly", () => {
    const { container } = render(<App />);
    expect(container).toBeInTheDocument();
  });
});
