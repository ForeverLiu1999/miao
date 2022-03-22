// 303-E-区域和检索 - 数组不可变
/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  const n = nums.length;
  const sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    this.sums[i + 1] = this.nums[i] + nums[i];
  }
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.sums[right + 1] - this.sums[left];
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// -----------------------------------------------------------------------------
var NumArray = function(nums) {
  const n = nums.length;
  this.sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
      this.sums[i + 1] = this.sums[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j + 1] - this.sums[i];
};