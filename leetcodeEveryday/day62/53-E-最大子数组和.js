/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (const num of nums) {
    if (sum > 0) {
      sum += num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};

var maxSubArray = function (nums) {
  let pre = 0; maxAns = nums[0];
  nums.forEach((x) => {
    pre = Math.max(pre + x, x);
    maxAns = Math.max(maxAns, pre);
  });
  return maxAns;
}