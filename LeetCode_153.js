/*
153. Find Minimum in Rotated Sorted Array - Medium
--------------------------------------------------
Topic: Binary Search, Array

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. 
Find the minimum element in the array.

You must write an algorithm that runs in O(log n) time.

Examples:
1. Input: nums = [3,4,5,1,2]      -> Output: 1
2. Input: nums = [4,5,6,7,0,1,2]  -> Output: 0
3. Input: nums = [11,13,15,17]    -> Output: 11

Time Complexity:  O(log n)
Space Complexity: O(1)
*/



var findMin = function(nums) {
    let left = 0;                                             // Start index
    let right = nums.length - 1;                              // End index

    while (left < right) {
        let mid = Math.floor((left + right) / 2);             // Middle index

        if (nums[mid] > nums[right]) {
            left = mid + 1;                                   // Minimum is in right half
        } else {
            right = mid;                                      // Minimum is at mid or in left half
        }
    }

    return nums[left];                                        // Minimum element
};


// ---------------- Test Cases ----------------
console.log(findMin([3,4,5,1,2]));                            // Output: 1
console.log(findMin([4,5,6,7,0,1,2]));                        // Output: 0
console.log(findMin([11,13,15,17]));                          // Output: 11
console.log(findMin([2,3,4,5,6,7,1]));                        // Output: 1
console.log(findMin([1]));                                    // Output: 1
