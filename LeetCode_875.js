/*
875. Koko Eating Bananas - Medium
---------------------------------
Topic: Binary Search

Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. 
The guards have gone and will come back in h hours.

Koko can decide her bananas-per-hour eating speed k. 
Each hour, she chooses some pile of bananas and eats k bananas from that pile. 
If the pile has less than k bananas, she eats all of them instead and stops eating for that hour.

Return the minimum integer k such that she can eat all bananas within h hours.

Examples:
1. Input: piles = [3,6,7,11],      h = 8 -> Output: 4
2. Input: piles = [30,11,23,4,20], h = 5 -> Output: 30
3. Input: piles = [30,11,23,4,20], h = 6 -> Output: 23

Time Complexity:  O(n * log(maxPile))
Space Complexity: O(1)
*/



var minEatingSpeed = function(piles, h) {
    let left = 1;                                            // Minimum possible speed = 1 banana/hour
    let right = Math.max(...piles);                          // Maximum possible speed = largest pile
    let answer = right;                                      // Initialize answer with max speed

    // Helper function: hours needed to eat all piles at speed k
    function hoursNeeded(k) {
        let total = 0;                                       // Counter for total hours
        for (let pile of piles) {
            total += Math.ceil(pile / k);                    // Each pile takes ceil(pile/k) hours
        }
        return total;
    }

    // Binary search to find the minimum valid speed
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);             // Candidate speed
        let hours = hoursNeeded(mid);                         // Hours needed at this speed

        if (hours <= h) {
            answer = mid;                                     // Valid speed found
            right = mid - 1;                                  // Try smaller speed
        } else {
            left = mid + 1;                                   // Too slow → try faster speed
        }
    }

    return answer;                                            // Return the smallest valid speed
};


// ---------------- Test Cases ----------------
console.log(minEatingSpeed([3,6,7,11], 8));                   // Output: 4
console.log(minEatingSpeed([30,11,23,4,20], 5));              // Output: 30
console.log(minEatingSpeed([30,11,23,4,20], 6));              // Output: 23
console.log(minEatingSpeed([100], 10));                       // Output: 10
console.log(minEatingSpeed([5,5,5,5,5], 25));                 // Output: 1
