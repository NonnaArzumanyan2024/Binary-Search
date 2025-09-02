/*
162. Find Peak Element - Medium
---------------------------------
Topic: Binary Search, Array

A peak element in an array is an element that is strictly greater than its neighbors.
Given an integer array nums, return the value of any peak element.

Examples:
1. Input: nums = [1,2,3,1]       -> Output: 3
2. Input: nums = [1,2,1,3,5,6,4] -> Output: 2 or 6

Time Complexity:  O(log n)
Space Complexity: O(1)
*/



var findPeakElement = function(nums) {
    let left = 0;                                                          // Start index
    let right = nums.length - 1;                                           // End index

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

                                                                 
        if ((mid === 0 || nums[mid] > nums[mid - 1]) &&
            (mid === nums.length - 1 || nums[mid] > nums[mid + 1])) {      // Check if mid is a peak
            return nums[mid];                                              // Found a peak
        }

        if (nums[mid] < nums[mid + 1]) {                                   // If right neighbor is greater, move right                                                                   // If right neighbor is greater, move right

            left = mid + 1;
        } 
        else {                                                             // If left neighbor is greater, move left
            right = mid - 1;
        }
    }

    return nums[left];                                                     // Fallback
};


// ---------------- Test Cases ----------------
console.log(findPeakElement([1,2,3,1]));                                   // Output: 3
console.log(findPeakElement([1,2,1,3,5,6,4]));                             // Output: 2 or 6
console.log(findPeakElement([1]));                                         // Output: 1
console.log(findPeakElement([1,2]));                                       // Output: 2
console.log(findPeakElement([2,1]));                                       // Output: 2
