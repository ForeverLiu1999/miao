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

var dominantIndex = function (nums) {
  let m1 = -1, m2 = -1;
  let index = -1;
  for (let i = 0; i < nums.length; i++) {
    // 如果当前值比最大值大，就把最大值给次大值m2，然后再把最大值给m1
    if (nums[i] > m1) {
      m2 = m1;
      m1 = nums[i];
      index = i;
      // 如果当前值不比最大值大，只比次大值大，那只更新次大值
    } else if (nums[i] > m2) {
      m2 = nums[i];
    }
  }
  // 最大值是否为次大值的两倍
  return m1 >= m2 * 2 ? index : -1;
}