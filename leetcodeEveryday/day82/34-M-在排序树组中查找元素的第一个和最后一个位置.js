// 34-M-在排序树组中查找元素的第一个和最后一个位置 二分查找
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
//  var searchRange = function(nums, target) {
//    let start = 0,end = 0;
//   for (let i = 0; i < nums.length; i++) {
//     if (target === nums[i]) {
//       start = i;
//       if (target === nums[i + 1]) {
//         return end
//       }
//     }
//   }
//   return none;
// };

// 二分查找
// 本质找第一个值为target的位置和第一个大于target的位置减一
// 次函数表示在nums数组中二分查找target的位置，如果lower为true，则查找第一个大于等于target的下标，否则查找第一个大于target的下标
const binarySearch = (nums, target, lower) => {
  // 二分查找的左右指针
  let left = 0, right = nums.length - 1, ans = nums.length;
  // 指针移动条件
  while (left <= right) {
    // 取中点
    const mid = Math.floor((left + right) / 2);
    // 如果lower为true，则查找第一个大于等于target的下标，否则查找第一个大于target的下标
    if (nums[mid] > target || (lower && nums[mid] >= target)) {
      right = mid - 1;
      ans = mid;
    } else {
      left = mid + 1;
    }
  }
  return ans;
}

var searchRange= function (nums, target) {
  // 默认ans就是没找到
  let ans = [-1, -1];
  const leftIdx = binarySearch(nums, target, true);
  const rightIdx = binarySearch(nums, target, false) - 1;
  if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
    // 如果符合条件就返回，不符合就默认ans
    ans = [leftIdx, rightIdx];
  }
  return ans;
}