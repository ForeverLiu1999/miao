/**
 * @param {number[]} nums
 * @return {number}
 */

var dominantIndex = function(nums) {
  const n = nums.length;
  if(n == 1) return 0;
  // a比b慢，所以b指向最大值，a指向次大值，同时要记录最大值的下标
  let a = -1, b = 0;
  // 进行遍历
  for (let i = 1; i < n; i++){
      if (nums[i] > nums[b]) {
          a = b; b = i;
      } else if (a == -1 || nums[i] > nums[a]) {
          a = i;
      }
  }
  // 最大值是否为次大值的两倍
  return nums[b] >= nums[a] * 2 ? b : -1;
};

