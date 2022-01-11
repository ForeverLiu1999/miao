/**
 * @param {number[]} nums
 * @return {number}
 */

var thirdMax = function(nums) {
  // 从大到小排序
  nums.sort((a, b) => b - a);
// 从头开始遍历数组，diff用来记录不同元素出现次数
  for (let i = 1, diff = 1; i < nums.length; ++i) {
    // 通过判断相邻元素是否相同，统计不同元素个数，如果能找到三个不同元素，就返回第三大的元素，否则返回最大元素
      if (nums[i] !== nums[i - 1] && ++diff === 3) { // 此时 nums[i] 就是第三大的数
          return nums[i];
      }
  }
  // 最大
  return nums[0];
};