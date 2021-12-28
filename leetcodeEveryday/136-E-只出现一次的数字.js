/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let ans = 0;
  for (num = 0; num < nums; num++) {
    ans ^= num;
  }
  return ans;
};