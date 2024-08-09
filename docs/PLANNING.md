# Planning - JavaScript Code Kata Hackathon - Solve the Two Sum Problem

## Ideation

Ideation for this code kata took loads of time. Lots of research went into finding a code problem that wasn't too complex for our current JavaScript understanding, but also not so simple that it wasn't challenging.

#### Disney ideation

I used the Disney ideation method to brainstorm my ideas and while in the "dreamer" room I came up with the idea to present the user with a coding problem that commonly occurs in Junior development interviews/tech tests.

#### AI Tools

From there I used ChatGPT to hone in on a real-world code problem with just the right amount of complexity to challenge my fellow School of Code team members, without totally stumping them. This led me to the two sum problem (which is detailed extensively in this project's [README.md file](../README.md)).

#### Story idea

As for the story for my code kata (you want that enjoyment and creativity factor, right)... It was always going to be Lord of the Rings themed, since I'm halfway through the second book in the trilogy.

## Quality Assurance Testing Strategies

I used ChatGPT extensively to help me with my planning and generating quality assurance (QA) testing strategies based on the following QA principles:

- **Equivalence partitioning**
- **Boundary value analysis**
- **Decision tables**

Some of my research can be found below.

### 1. Equivalence Partitioning

Equivalence Partitioning involves dividing input data into partitions where test cases in each partition are expected to yield similar results. For the `findTwoSumIndices` function, we can identify several equivalence classes:

- **Positive Numbers:** Arrays with only positive numbers where the target can be achieved (e.g., `[1, 2, 3, 4, 5]`, target = 9).
- **Negative Numbers:** Arrays with only negative numbers where the target can be achieved (e.g., `[-1, -2, -3, -4]`, target = -7).
- **Mixed Positive and Negative Numbers:** Arrays with both positive and negative numbers where the target can be achieved (e.g., `[0, 2, -2, 4]`, target = 0).
- **Target Not Achievable:** Arrays where no two numbers sum up to the target (e.g., `[1, 2, 3, 4]`, target = 8).
- **Array with Duplicates:** Arrays with duplicate numbers (e.g., `[13, 6, 17, 14, 19, 3, 10, 9, 1, 9, 7, 13, 3]`, target = 21).

Each equivalence class is represented by at least one of the provided test cases. These test cases cover the major scenarios that the function should handle.

### 2. Boundary Value Analysis

Boundary Value Analysis focuses on testing at the boundaries of input partitions, as errors often occur at the edges of input ranges. The key boundaries in this scenario include:

- **Smallest Array Size:** The minimum size of the array that can still return a valid pair. For example, an array of size 2 where the two numbers sum up to the target (e.g., `[2, 3]`, target = 5).
- **Largest Array Size:** The largest array size the system is expected to handle within performance constraints.
- **Boundary of Positive/Negative Numbers:** The transition point between positive and negative numbers (e.g., `[-1, 0, 1]` with target = 0).
- **Zero in Array:** Testing when the array contains zero (e.g., `[0, 2, -2, 4]`).
- **Target Not Achievable:** Boundary conditions where the sum of the smallest and largest number in the array is still less than the target.

### 3. Decision Tables

Decision Tables help capture and explore different combinations of inputs and the corresponding outputs, which is useful when there are multiple conditions influencing the output. For `findTwoSumIndices`, the primary conditions are:

- **Presence of the Target:** Whether a valid pair that sums to the target exists.
- **Multiple Valid Pairs:** Whether there are multiple valid pairs that sum to the target.
- **Order of Indices:** Ensuring the function returns the indices in ascending order.

| **Condition**                           | **Array**                                       | **Target** | **Expected Output**   |
| --------------------------------------- | ----------------------------------------------- | ---------- | --------------------- |
| Target achievable with distinct numbers | `[1, 2, 3, 4, 5]`                               | 9          | `[3, 4]`              |
| Target achievable with negative numbers | `[-1, -2, -3, -4]`                              | -7         | `[2, 3]`              |
| Target achievable with zero             | `[0, 2, -2, 4]`                                 | 0          | `[1, 2]`              |
| Multiple valid pairs                    | `[8, 4, 2, 6]`                                  | 10         | `[0, 2]` (first pair) |
| Target not achievable                   | `[1, 2, 3, 4]`                                  | 8          | `[]` (empty array)    |
| Array with duplicates                   | `[13, 6, 17, 14, 19, 3, 10, 9, 1, 9, 7, 13, 3]` | 21         | `[3, 10]`             |

This decision table captures different combinations of conditions (array content and target) and the expected output, ensuring that all critical paths are tested.

### Summary

- **Equivalence Partitioning:** Identify key partitions of input data (e.g., positive numbers, negative numbers, mixed numbers, etc.).
- **Boundary Value Analysis:** Focus on edge cases, such as the smallest/largest array sizes, and critical boundaries in the number range.
- **Decision Tables:** Enumerate conditions and outputs to ensure comprehensive testing of possible scenarios.

Together, these testing strategies provide robust coverage of the `findTwoSumIndices` function’s expected behavior, including both typical and edge cases.

You can simply copy and paste this markdown content into your README.md file on GitHub. The headers, tables, and bullet points will render correctly in GitHub's markdown viewer.
