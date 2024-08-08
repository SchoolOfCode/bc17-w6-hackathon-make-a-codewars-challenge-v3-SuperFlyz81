import { test, expect } from "vitest";
import { findSpellPair } from "./main.js";

// TODO - Think about wrapping these in a describe statement (or multiple describe statements)
test("Find the correct pair of indices for a given target", () => {
  expect(findSpellPair([1, 2, 3, 4, 5], 9)).toEqual([3, 4]); // 4 + 5 = 9
});

test("Check an array with descending numbers", () => {
  expect(findSpellPair([7, 5, 3, 1], 8)).toEqual([0, 3]); // 7 + 1 = 8
});

test("Handle an array with multiple valid pairs (which should return only the first valid pair)", () => {
  expect(findSpellPair([8, 4, 2, 6], 10)).toEqual([0, 2]); // 8 + 2 = 10
});

test("Test negative numbers", () => {
  expect(findSpellPair([-1, -2, -3, -4], -7)).toEqual([2, 3]); // -3 + -4 = -7
});

test("Verify a zero-valued target", () => {
  expect(findSpellPair([0, 2, -2, 4], 0)).toEqual([1, 2]); // 2 + -2 = 0
});

test("Check an array with mixed single and double digit numbers, and with multiple duplicates", () => {
  expect(
    findSpellPair([13, 6, 17, 14, 19, 3, 10, 9, 1, 9, 7, 13, 3], 21)
  ).toEqual([3, 10]); // 14 + 7 = 21
});
