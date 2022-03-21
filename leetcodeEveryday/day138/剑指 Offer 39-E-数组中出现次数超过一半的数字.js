// 剑指 Offer 39-E-数组中出现次数超过一半的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
// 排序后，出现次数超过一半的数字，一定在数组正中间出现
 var majorityElement = function(nums) {
  nums = nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

var majorityElement = function (nums) {
  let tickets = 0, most = 0;
  for (let i = 0; i < nums.length; i++) {
    if (tickets == 0) many = nums[i];
    tickets += (many = nums[i] ? 1 : -1);
  }
  return most;
}