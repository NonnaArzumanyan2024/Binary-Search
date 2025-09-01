/*
69. Sqrt(x) - Easy
-------------------
Topic: Binary Search

Given a non-negative integer x, return the square root of x rounded down to the nearest integer.
You must not use Math.sqrt() or any built-in exponent function.

Examples:
1. Input: x = 4  -> Output: 2
2. Input: x = 8  -> Output: 2
3. Input: x = 0  -> Output: 0
4. Input: x = 1  -> Output: 1

Time Complexity:  O(log x)
Space Complexity: O(1)
*/



var mySqrt = function(x) {
    if (p < 0) return -1;                                        // Negative numbers not allowed
    if (x === 0 || x === 1) return x;                            // Quick return for 0 or 1

    let left = 1;                                                // Start binary search from 1
    let right = x;                                               // End of search range
    let answer = 1;                                              // Initialize answer

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);                // Middle candidate
        let square = mid * mid;                                  // Square of mid

        if (square === x) {
            return mid;                                          // Perfect square found
        } else if (square < x) {
            answer = mid;                                        // mid is too small, store as potential answer
            left = mid + 1;                                      // Try larger numbers
        } else {
            right = mid - 1;                                     // mid is too big, try smaller numbers
        }
    }

    return answer;                                               // Return the integer square root
};


// ---------------- Test Cases ----------------
console.log(mySqrt(4));                                          // Output: 2
console.log(mySqrt(8));                                          // Output: 2
console.log(mySqrt(0));                                          // Output: 0
console.log(mySqrt(1));                                          // Output: 1
console.log(mySqrt(16));                                         // Output: 4
console.log(mySqrt(26));                                         // Output: 5
