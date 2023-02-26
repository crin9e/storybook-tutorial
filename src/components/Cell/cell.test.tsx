import React from "react";
import { ClassCell } from "./Cell";
import { render, fireEvent, screen } from "@testing-library/react";

describe("cell class component", () => {
  it("should render a cell", () => {
    render(<ClassCell number={1} color="red" />);

    const cell = screen.getAllByTestId("cell");

    expect(cell).toBeDefined();
  });
});
