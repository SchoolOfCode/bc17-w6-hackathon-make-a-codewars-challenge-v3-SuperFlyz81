// TODO - Write Kata Scenario Here
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
