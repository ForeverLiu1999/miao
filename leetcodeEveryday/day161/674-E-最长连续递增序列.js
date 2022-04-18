// 674-E-最长连续递增序列
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
  let ans = 0;
  const n = nums.length;
  let start = 0;
  for (let i = 0; i < n; i++) { // 遍历nums所有元素
      if (nums[i] <= nums[i - 1]) { // 判定递增条件
          start = i; // 如果符合条件,就把i当成新的start
      }
      ans = Math.max(ans, i - start + 1); // 扩展后的最长连续递增序列
  }
  return ans;
};