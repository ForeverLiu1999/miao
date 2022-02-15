// offer 53 -E- I. 在排序数组中查找数字 I
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var search = function(nums, target) {
   let counter = 0;
  for (let i = 0; i <= nums.length; i++) {
    if (nums[i] === target) counter++;
  }
  return counter;
};

// 二分查找
const binarySearch = (nums, target, lower) => {
  let left = 0, right = nums.length - 1, ans = nums.length;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}
var search = function (nums, target) {
  // 定义ans为数字出现次数
  let ans = 0;
  // 定义第一个大于等于target的下标和第一个大于target的下标
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  // 符合条件时返回差，不符合时返回0
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    ans = rightIdx - leftIdx + 1;
  }
  return ans;
}