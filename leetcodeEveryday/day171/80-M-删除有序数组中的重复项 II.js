// 80-M-删除有序数组中的重复项 II
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var removeDuplicates = function(nums) {
  const n = nums.length;
  // 如果长度小于2就不做任何处理
  if (n <= 2) {
      return n;
  }
  let slow = 2, fast = 2;
  while (fast < n) {
    // 因为可以出现两次,检查上上个应该保留的元素和当前待检查元素是否相同
      if (nums[slow - 2] != nums[fast]) {
          nums[slow] = nums[fast];
          ++slow;
      }
      ++fast;
  }
  return slow;
};
