/**
 * @param {number[]} nums
 * @return {number}
 */

// 使n-1个元素增加1等价于使1个元素减少1
var minMoves = function(nums) {
  const minNum = Math.min(...nums);
  let res = 0;
  for (const num of nums) {
      res += num - minNum;
  }
  return res;
};