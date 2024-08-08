# 🔥 Kata: You Shall Not Pass! 🔥

### Help Gandalf defeat the Balrog by solving the <ins>Two Sum Problem</ins>.

![You Shall Not Pass!](./assets/images/lotr-you-shall-not-pass.gif)

The two sum problem is commonly found in junior developer interviews and tech tests. So now is a great time to learn how to solve it (and save the entire "fellowship" in the process)!

## Lore 📜

Gandalf the Grey is engaged in a battle of epic proportions on the Bridge of Khazad-dûm, deep in the Mines of Moria. His arch-nemesis, the Balrog, is roaring, fire is blazing, and Gandalf is running out of clever one-liners. "You shall not pass!" is not cutting it anymore.

To save the day, he needs to combine exactly two of his magical spells to match the precise power needed to vanquish the Balrog. The spells are a bit quirky and have power levels represented by integers. Gandalf, being a wizard but not exactly a JavaScript developer, needs your help to figure out which two spells to use.

## Task 📋

Given an array of integers representing the power levels of Gandalf's spells and an integer target representing the exact power needed to defeat the Balrog, you must find <ins>the indices</ins> of the two spells whose combined power matches the target. Remember, Gandalf can’t just wave his staff and magically know the answer—he’s counting on you!

## Requirements ✅

#### 1. Function Signature

```
function findTwoSumIndices(numbers, target) {
  // Your code goes here
}
```

#### 2. Input

- An array "numbers" where each element is an integer, representing the magical power of each spell.
- An integer "target" which is the total power Gandalf needs.

#### 3. Output

- An array containing two integers.
- These integers are the indices of the numbers (a.k.a. the magical spell powers) that sum up to the target.
- **Return these two indices in an array to pass the test.**

## Examples ✏️

```
findTwoSumIndices([2, 4, 6, 8], 10); // returns [0, 3] since 2 + 8 = 10
findTwoSumIndices([1, 3, 5, 7], 8);  // returns [0, 3] since 1 + 7 = 8
findTwoSumIndices([1, 2, 3, 4, 5], 9); // returns [3, 4] since 4 + 5 = 9
findTwoSumIndices([7, 5, 3, 1], 8); returns [0, 3] since 7 + 1 = 8
findTwoSumIndices([8, 4, 2, 6], 10); returns [0, 2] since 8 + 2 = 10
```

#### Explanations

##### In the first example

- Gandalf’s spell list is [2, 4, 6, 8].
- The target power is 10.
- The spell at index 0 has a power level of 2, and the spell at index 3 has a power level of 8.
- When these two spells combine their powers, they total 10, saving the day and proving Gandalf's wizardry isn’t just for show. The function returns [0, 3].

##### In the second example

- Gandalf’s spell list is [1, 3, 5, 7].
- The target is 8.
- The spell at index 0 has a power level of 1, and the spell at index 3 has a power level of 7.
- Combining these spells gives a total of 8, so the function returns [0, 3].

##### Further examples

- Further examples (examples three to five) have been provided for the sake of reference.

---

### Fare thee well, Gandalf the Grey, and may the light of your staff ever illuminate the darkest paths before you, and the blade of Glamdring strike true against all who threaten your quest!

![Gandalf faces off against the Balrog](./assets/images/lotr-balrog-gandalf.jpg)
