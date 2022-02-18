// 剑指offer 53 - II. 0～n-1中缺失的数字
/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
  nums.push('x');
 for (let i = 0; i < nums.length; i++) {
   if (nums[i] !== i) return i;
 }
};

// 二分法
// 确认一个元素，如果左侧无缺失则有nums[i] === i
// 而如果不满足，缺失的数字在右边
var missingNumber = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) >>> 1);
    if (mid == nums[mid]) {
       left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
}