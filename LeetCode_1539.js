/*
1539. Kth Missing Positive Number - Easy
----------------------------------------
Topic: Binary Search, Array

Given a sorted array nums of distinct positive integers, 
return the kth missing positive number from this array.

Examples:
1. Input: nums = [2,3,4,7,11], k = 5 -> Output: 9
2. Input: nums = [1,2,3,4],    k = 2 -> Output: 6

Time Complexity:  O(log n)
Space Complexity: O(1)
*/



var findKthPositive = function(nums, k) {
    let left = 0;                                          // Start index of search
    let right = nums.length - 1;                           // End index of search

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);     
        let missing = nums[mid] - (mid + 1);               // Missing numbers until nums[mid]

        if (missing < k) {
            left = mid + 1;                                // Not enough missing -> move right
        } else {
            right = mid - 1;                               // Too many missing -> move left
        }
    }

    return left + k;                                       // left + k gives the kth missing number
};


// ---------------- Test Cases ----------------
console.log(findKthPositive([2,3,4,7,11], 5));             // Output: 9
console.log(findKthPositive([1,2,3,4], 2));                // Output: 6
console.log(findKthPositive([2,3,4,7,11], 1));             // Output: 1
console.log(findKthPositive([1,3,5,7], 3));                // Output: 6
console.log(findKthPositive([1,2], 1));                    // Output: 3
