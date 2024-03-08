/**  @jest-environment jsdom */
import "@testing-library/jest-dom";
import { expect, test, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../../components/button";

test("Expect is Button", () => {
  const mockSetCount = vi.fn();

  render(<Button setCount={mockSetCount} />);
  expect(screen.getByRole("button")).toBeDefined();
  expect(screen.getByRole("button")).toBeInTheDocument();
});

test("Expect is Button rendering", () => {
  const mockSetCount = vi.fn();

  render(<Button setCount={mockSetCount} />);
  expect(screen.getByRole("button")).toHaveTextContent(/Increment/i);
});

test("Expect is Button on event", () => {
  const mockFun = vi.fn().mockImplementation((count) => count + 1);
  const { getByText } = render(<Button setCount={mockFun} />);
  const button = getByText("Increment");

  fireEvent.click(button);
  expect(mockFun(3)).toBe(4);
  expect(mockFun).toHaveBeenCalled();
  expect(mockFun).toHaveBeenCalledTimes(2);
});
