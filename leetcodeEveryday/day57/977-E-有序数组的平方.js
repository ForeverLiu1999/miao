/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 双指针
 var sortedSquares = function(nums) {
  let res = [];
  for (let i = 0, j = nums.length - 1; i <= j;) {
    const left = Math.abs(nums[i]);
    const right = Math.abs(nums[j]);
      // 把大的数加进数组
    if (right > left) {
      // 如果左边的i方<右边的j方
      res.unshift(right * right);
      j--;
      // 右边j方的指针左移
    } else {
      // 如果左边的i方<右边的j方
      res.unshift(left * left);
      i++;
    }
  }
  return res;
};