// 面试题 17.10-E-主要元素
/**
 * @param {number[]} nums
 * @return {number}
 */
//  var majorityElement = function(nums) {
//   nums.sort((a, b) => a - b);
//   if (nums.length == 1) return nums[0];
//   else if (nums.length == 3) {
//     const set = new Set();
//     for (let i of nums) {
//       set.add(nums[i]);
//     }
//     if (nums.length == set.size) {
//       return -1;
//     }
//   }
//   else return nums[Math.floor(nums.length / 2)];
// };

// boyer-moore投票算法
// https://leetcode-cn.com/problems/find-majority-element-lcci/solution/zhu-yao-yuan-su-by-leetcode-solution-xr1p/
var majorityElement = function(nums) {
  let candidate = -1;
  let count = 0;
  for (const num of nums) {
      if (count === 0) {
          candidate = num;
      }
      if (num === candidate) {
          count++;
      } else {
          count--;
      }
  }
  count = 0;
  const length = nums.length;
  for (const num of nums) {
      if (num === candidate) {
          count++;
      }
  }
  return count * 2 > length ? candidate : -1;
};
