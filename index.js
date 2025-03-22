function hasTargetSum(array, target) {
  // Create a list to remember numbers we have seen
  const seenNumbers = new Set();

  // Go through each number in the array
  for (let num of array) {
    let missingNumber = target - num; // What number do we need to make the target?
    
    // If we've seen the missing number before, we found a pair!
    if (seenNumbers.has(missingNumber)) {
      return true;
    }

    // If not, store the current number and keep checking
    seenNumbers.add(num);
  }

  // If no pair was found, return false
  return false;
}

/* 
  Big O Time Complexity:
  - We go through the list once → **O(n)** (fast!)
  - Checking numbers is quick because Sets are efficient
*/

/* 
  Pseudocode:
  1. Make an empty list to store seen numbers
  2. Loop through the numbers in the array
     - Find out what number we need to reach the target
     - If we've seen that number before, return true
     - Otherwise, store the current number
  3. If no match is found, return false
*/

// Test cases to check if the function works
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
