/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
   let l = nums.length;
   let count = 0;
   let result = 0;
  for (let i = 0; i < l; i++) {
    if (nums[i] == 1) {
      count++;
      result = Math.max(result, count);
    } else {
      count = 0;
    }
  }
  return result;
};

// var findMaxConsecutiveOnes = function(nums) {
//   let max = 0;
//   var c = 0;
//   for (var i = 0; i < nums.length; i++) {
//     if (nums[i] == 1) {
//       c++;
//       if (c > max) {
//         max = c;
//       }
//     } else {
//       c = 0;
//     }
//   }
//   return max;
// };

findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]);