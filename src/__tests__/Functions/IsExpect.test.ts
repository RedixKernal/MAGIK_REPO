import { expect, test } from "vitest";

type TTestSample = {
  name: string;
  type: string;
};

test("Expect number is two", () => {
  expect.soft(1 + 1).toBe(2);
});

const arr: TTestSample[] = [
  { name: "redix", type: "test" },
  { name: "redix_Main", type: "test_XD" },
  { name: "red", type: "main_XD" },
  { name: "null", type: "null" },
];

test("Expect array length is three", () => {
  expect.soft(arr.length).toBe(4);
});

test("Expect types of array is defined", () => {
  arr.forEach((item) => {
    const getType =
      typeof item === "object"
        ? Object.prototype.toString.call(item)
        : typeof item;
    expect.soft(getType).toBeDefined();
  });
});

test("Expect array is name should be define", () => {
  arr.forEach((item) => {
    expect.soft(item.name).toBeDefined();
  });
});

test("Expect array is type should be define", () => {
  arr.forEach((item) => {
    expect.soft(item.type).toBeDefined();
  });
});

test("Expect array type and name should not be null or undefined", () => {
  arr.forEach((item) => {
    expect.soft(item.type).not.toBeNull();
  });
  arr.forEach((item) => {
    expect.soft(item.name).not.toBeNull();
  });
});
