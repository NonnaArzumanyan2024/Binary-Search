/*
33. Search in Rotated Sorted Array - Medium
-------------------------------------------
Topic: Binary Search, Array

Given a rotated sorted array of distinct integers and a target value, 
return the index of the target if found, or -1 if not found.

You must write an algorithm with O(log n) runtime complexity.

Examples:
1. Input: nums = [4,5,6,7,0,1,2], target = 0 -> Output: 4
2. Input: nums = [4,5,6,7,0,1,2], target = 3 -> Output: -1
3. Input: nums = [1], target = 0 -> Output: -1

Time Complexity:  O(log n)
Space Complexity: O(1)
*/



var searchRotated = function(nums, target) {
    let left = 0;                                                    // Start index of search range
    let right = nums.length - 1;                                     // End index of search range

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);                    // Middle index

        if (nums[mid] === target) {
            return mid;                                              // Found target -> return index
        }

        // Left half is sorted
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target < nums[mid]) {
                right = mid - 1;                                     // Target in left half -> shrink right boundary
            } else {
                left = mid + 1;                                      // Target not in left half -> search right half
            }
        } 
        // Right half is sorted
        else {
            if (nums[mid] < target && target <= nums[right]) {
                left = mid + 1;                                      // Target in right half -> shrink left boundary
            } else {
                right = mid - 1;                                     // Target not in right half -> search left half
            }
        }
    }

    return -1;                                                       // Target not found
};


// ---------------- Test Cases ----------------
console.log(searchRotated([4,5,6,7,0,1,2], 0));                      // Output: 4
console.log(searchRotated([4,5,6,7,0,1,2], 3));                      // Output: -1
console.log(searchRotated([1], 0));                                  // Output: -1
console.log(searchRotated([6,7,0,1,2,3,4,5], 3));                    // Output: 5
console.log(searchRotated([5,1,2,3,4], 1));                          // Output: 1
