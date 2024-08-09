/**
 * Kata: You Shall Not Pass! A Two Sum Problem-Solving Quest.
 *
 * Hello brave companion!
 *
 * Your task is to write a function named `findTwoSumIndices` to solve the Two Sum problem.
 * And help Gandalf, a great wizard but not much of a coder, save the "fellowship" in the process.
 *
 * The two sum problem is a common coding challenge where you're given an array of numbers and a target sum.
 * Your task is to find two distinct numbers in the array that add up to the target sum and return their indices.
 * If no such pair exists, just return a blank array.
 *
 * A few examples:
 *    `findTwoSumIndices([1, 2, 3, 4, 5], 9))` should return [3, 4], since 4 + 5 = 9
 *    `findTwoSumIndices([7, 5, 3, 1], 8))` should return [0, 3], since 7 + 1 = 8
 *
 *  PLEASE SEE THE README.ME FILE IN THIS PROJECT FOR:
 *  - Full details on the two sum problems (including a fun story).
 *  - Required inputs and outputs for the `findTwoSumIndices` function below.
 *  - Even more examples.
 *  - Hints and solutions.
 *
 * Now go forth dear friend and good luck on your noble quest!
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
