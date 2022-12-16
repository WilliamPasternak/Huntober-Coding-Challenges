Two Sum (Multiple Nums)
Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

 Create an array to hold winning pairs and  create an object to store each number looped through. See if the sum - current number exists in the object, if so push current and stored value to your pairs array

function twoSum(nums,target){
const pairs = []
const numsVisited = {}

  for(let num of nums){
    if((target - num) in numsVisited){
    pairs.push([num, target - num])
  }
  numsVisited[num] = num
  }
  return pairs
}
// Test Cases:
console.log(twoSum([1, 2, 2, 3, 4], 4),  '[[2, 2], [3, 1]]')