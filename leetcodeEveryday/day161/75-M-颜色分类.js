// 75-M-颜色分类
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 非原地暴力解法
 var sortColors = function(nums) {
  const newNums = new Array(nums.length).fill(0);
  let nums0 = 0, nums1 = 0, nums2 = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 0) nums0++;
    if (nums[i] == 1) nums1++;
    if (nums[i] == 2) nums2++;
  }
  for (let j = 0; j < newNums.length; j++) {

  }
  return newNums;
};