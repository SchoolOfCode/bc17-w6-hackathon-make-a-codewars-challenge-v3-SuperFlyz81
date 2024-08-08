// TODO - Write Kata Scenario Here
export function findSpellPair(spells, target) {
  // Good luck!

  // Loop through each spell
  for (let i = 0; i < spells.length; i++) {
    // Check with every other spell that comes after the current spell
    for (let j = i + 1; j < spells.length; j++) {
      // If the sum of the current spell and the next spell equals the target, return their indices
      if (spells[i] + spells[j] === target) {
        return [i, j];
      }
    }
  }

  return []; // If no such pair is found, return an empty array
}
