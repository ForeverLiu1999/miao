/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  // 原数组排序
  nums.sort((a, b) => a - b);
  let res = nums[0] + nums[1] + nums[2];
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    let left = i + 1;
    let right = l - 1;
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      if (Math.abs(res - target) > Math.abs(sum - target)) {
        res = sum;
        // 根据从小到大排序，左右指针不能增大，只有右指针能够缩小，进而缩小sum值
      } else if (sum > target) {
        right--;
        // 同理，从小的元素累加起
      } else if (sum < target) {
        left++;
      } else if (sum === target) {
        return res;
      }
    }
  }
  return res;
};