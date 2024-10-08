import { test, expect, describe } from "vitest";
import { findTwoSumIndices } from "./main.js";

// Basic tests
describe("Basic tests", () => {
  test("Find the correct pair of indices for a given target", () => {
    expect(findTwoSumIndices([1, 2, 3, 4, 5], 9)).toEqual([3, 4]); // since 4 + 5 = 9
  });

  test("Check an array with descending numbers", () => {
    expect(findTwoSumIndices([7, 5, 3, 1], 8)).toEqual([0, 3]); // since 7 + 1 = 8
  });

  test("Handle an array with multiple valid pairs (which should return only the first valid pair)", () => {
    expect(findTwoSumIndices([8, 4, 2, 6], 10)).toEqual([0, 2]); // since 8 + 2 = 10
  });
});

// Edge cases
describe("Edge cases", () => {
  test("Test negative numbers", () => {
    expect(findTwoSumIndices([-1, -2, -3, -4], -7)).toEqual([2, 3]); // since -3 + -4 = -7
  });

  test("Verify against a zero-valued target", () => {
    expect(findTwoSumIndices([0, 2, -2, 4], 0)).toEqual([1, 2]); // since 2 + -2 = 0
  });

  test("Test for a target that cannot be satisfied (just expect a blank array)", () => {
    expect(findTwoSumIndices([1, 2, 3, 4], 8)).toEqual([]); // since the highest possible target here is 7, but we are seeking a target of 8.
  });
});

// Complex tests
describe("Complex tests", () => {
  test("Check an array with mixed single and double digit numbers, and with multiple duplicates", () => {
    expect(
      findTwoSumIndices([13, 6, 17, 14, 19, 3, 10, 9, 1, 9, 7, 13, 3], 21)
    ).toEqual([3, 10]); // since 14 + 7 = 21
  });
});
