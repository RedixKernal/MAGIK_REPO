/**  @jest-environment jsdom */
import "@testing-library/jest-dom";
import { expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import Count from "./../../components/count";

test("Expect is counter with intial value", () => {
  render(<Count count={0} />);
  expect(screen.getByText("increased value : 0")).toBeInTheDocument();
});

test("Expect is counter with random value", () => {
  render(<Count count={2} />);
  expect(screen.getByText("increased value : 2")).toBeInTheDocument();
});
