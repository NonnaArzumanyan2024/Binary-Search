/*
74. Search a 2D Matrix - Medium
---------------------------------
Topic: Binary Search, Matrix

Write an efficient algorithm that searches for a value target in an m x n matrix. 
This matrix has the following properties:
1. Integers in each row are sorted in ascending order.
2. The first integer of each row is greater than the last integer of the previous row.

Examples:
1. Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3  -> Output: true
2. Input: matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13 -> Output: false

Time Complexity:  O(log(m * n))
Space Complexity: O(1)
*/



var searchMatrix = function(matrix, target) {

    function findRow() {                                            // Helper: find the row that may contain the target
        let left = 0;                         
        let right = matrix.length - 1;        

        while (left < right) {
            let mid = Math.floor((left + right) / 2);

            if (target < matrix[mid][0]) {
                right = mid - 1;                                    // target is in an upper row
            } else if (mid + 1 < matrix.length 
                       && target < matrix[mid + 1][0]) {
                return mid;                                         // target row found
            } else {
                left = mid + 1;                                     // target is in a lower row
            }
        }

        return left;                                                // fallback row
    }

    function findTarget(row) {                                      // Helper: binary search inside the row
        let left = 0;                         
        let right = matrix[0].length - 1;    

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (matrix[row][mid] === target) {
                return true;                                        // target found
            } else if (target < matrix[row][mid]) {
                right = mid - 1;                                    // search left
            } else {
                left = mid + 1;                                     // search right
            }
        }

        return false;                                               // target not found
    }

    return findTarget(findRow());                                   // combine row and column search
};


// ---------------- Test Cases ----------------
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 3));     // Output: true
console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,60]], 13));    // Output: false
console.log(searchMatrix([[1]], 1));                                       // Output: true
console.log(searchMatrix([[1,3]], 3));                                     // Output: true
console.log(searchMatrix([[1,3]], 2));                                     // Output: false
