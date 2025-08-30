/*
34. Find First and Last Position of Element in Sorted Array - Medium
-------------------------------------------------------------------
Topic: Binary Search, Array

Given an array of integers nums sorted in ascending order and a target value, 
return the starting and ending position of the target value in the array. 
If the target is not found, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.

Examples:
1. Input: nums = [5,7,7,8,8,10], target = 8 -> Output: [3,4]
2. Input: nums = [5,7,7,8,8,10], target = 6 -> Output: [-1,-1]
3. Input: nums = [],             target = 0 -> Output: [-1,-1]

Time Complexity:  O(log n)
Space Complexity: O(1)
*/


var searchRange = function(nums, target) {

    // Helper function: find the first occurrence of target
    function findFirst() {
        let left = 0;                                         // Start index of search range
        let right = nums.length - 1;                          // End index of search range
        let index = -1;                                       // Initialize result as not found

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                index = mid;                                   // Found target
                right = mid - 1;                               // Move left to find earlier occurrence
            } else if (nums[mid] < target) {
                left = mid + 1;                                // Target is in right half
            } else {
                right = mid - 1;                               // Target is in left half
            }
        }

        return index;                                          // Return first occurrence or -1
    }

    // Helper function: find the last occurrence of target
    function findLast() {
        let left = 0;
        let right = nums.length - 1;
        let index = -1;                                        // Initialize result as not found

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (nums[mid] === target) {
                index = mid;                                   // Found target
                left = mid + 1;                                // Move right to find later occurrence
            } else if (nums[mid] < target) {
                left = mid + 1;                                // Target is in right half
            } else {
                right = mid - 1;                               // Target is in left half
            }
        }

        return index;                                          // Return last occurrence or -1
    }

    return [findFirst(), findLast()];                          // Return [first, last] positions
};


// ---------------- Test Cases ----------------
console.log(searchRange([5,7,7,8,8,10], 8));                   // Output: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6));                   // Output: [-1,-1]
console.log(searchRange([], 0));                               // Output: [-1,-1]
console.log(searchRange([1,2,3,3,3,4,5], 3));                  // Output: [2,4]
console.log(searchRange([2,2,2,2], 2));                        // Output: [0,3]
