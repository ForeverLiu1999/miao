/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var twoSum = function(nums, target) {
//   let map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     x = target - nums[i];
//     if (map.has(x)) {
//       return [map.get(x), i];
//     }
//     map.set(nums[i], i);
//   }
// };

var twoSum = function (nums, target) {
  for(var i = 0; i < nums.length - 1; i++) {
    for(var j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] == target) {
        return [i, j];
      }
    }
  }
}