// 724-E-寻找数组的中心下标
/**
 * @param {number[]} nums
 * @return {number}
 */
// 双指针
var pivotIndex = function (nums) {
  let i = 0;
  let right = nums.length - 1;
  let sumLeft = 0;
  let sumRight = 0;
  while (left < right) {
    if (sumLeft === sumRight) {
      sumLeft += nums[left];
      sumRight += nums[right];
      left++;
      right--;
    } else {
      return left;
    }
  }
};

// 前缀和
var pivotIndex = function (nums) {
  // 先计算所有元素的和
  const numsSum = nums.reduce((a, b) => a + b);
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    // 如果左侧元素和为sum,则右侧元素和为numsSum - nums[i] - sum
    // 所以numsSum = sum * 2 + nums[i]
    if (2 * sum + nums[i] === numsSum) {
      return i;
    }
    // 左侧和不断累积
    sum += nums[i];
  }
  // 找不到这样的i就返回-1
  return -1;
}