import { render, screen } from "@testing-library/react";
import ArbsTable from "./ArbsTable";

describe("ArbsTable", () => {
  test("table renders properly", () => {
    render(<ArbsTable />);
    const table = screen.getByRole("grid");
    expect(table).toBeInTheDocument();

    expect(table.getAttribute("aria-rowcount")).toBe("41");
    expect(table.getAttribute("aria-colcount")).toBe("16");
  });
});
