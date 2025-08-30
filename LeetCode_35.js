/*
35. Search Insert Position - Easy
---------------------------------
Topic: Binary Search

Given a sorted array of distinct integers and a target value, 
return the index if the target is found. If not, return the index 
where it would be inserted in order.

You must write an algorithm with O(log n) runtime complexity.

Examples:
1. Input: nums = [1, 3, 5, 6], target = 5 -> Output: 2
2. Input: nums = [1, 3, 5, 6], target = 2 -> Output: 1
3. Input: nums = [1, 3, 5, 6], target = 7 -> Output: 4

Time Complexity:  O(log n)
Space Complexity: O(1)
*/



var searchInsert = function(nums, target) {
    let left = 0;                                                // Start index of search range
    let right = nums.length - 1;                                 // End index of search range

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);                // Middle index

        if (nums[mid] === target) {
            return mid;                                          // Found target -> return index
        } else if (nums[mid] < target) {
            left = mid + 1;                                      // Target in right half -> move left pointer
        } else {
            right = mid - 1;                                     // Target in left half -> move right pointer
        }
    }

    return left;                                                 // Target not found -> insertion position
};


// ---------------- Test Cases ----------------
console.log(searchInsert([1, 3, 5, 6], 5));  // Output: 2
console.log(searchInsert([1, 3, 5, 6], 2));  // Output: 1
console.log(searchInsert([1, 3, 5, 6], 7));  // Output: 4
console.log(searchInsert([1, 3, 5, 6], 0));  // Output: 0
console.log(searchInsert([1, 3, 5, 6], 6));  // Output: 3
