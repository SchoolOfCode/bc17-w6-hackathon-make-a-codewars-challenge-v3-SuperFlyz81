/**
 * Hello brave companion! Your task is to write a function named "findTwoSumIndices".
 *
 * This
 * Your implementation should handle strings whose length is between 0 (inclusive) and 2500 (inclusive).
 *
 * A few examples:
 *    `transformLength("table")` should return -1 as the length of "table" is not even
 *    `transformLength("wizard")` should return 1 as the length of "wizard" is even
 */
export function findTwoSumIndices(numbers, target) {
  // Good luck!

  // Loop through the numbers
  for (let i = 0; i < numbers.length; i++) {
    // Compare every other number that comes after the current number
    for (let j = i + 1; j < numbers.length; j++) {
      // If the sum of the current number and the next number equals the target, return their indices
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }

  return []; // If no such pair is found, return an empty array
}
