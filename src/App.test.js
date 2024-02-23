import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  test("renders app", () => {
    render(<App />);
    const titleElement = screen.getByText(/Arbs Table/i);
    expect(titleElement).toBeInTheDocument();
  });
});
