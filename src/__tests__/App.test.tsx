/**  @jest-environment jsdom */
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import App from "../App";

test("Expect increased text", () => {
  render(<App />);
  expect(screen.findAllByText(/increased/i)).toBeDefined();
});

test("Expect value text", () => {
  render(<App />);
  expect(screen.getAllByText(/value/i)).toBeDefined();
});
