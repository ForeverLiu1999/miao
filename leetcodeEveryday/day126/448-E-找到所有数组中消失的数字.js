// 448-E-找到所有数组中消失的数字
/**
 * @param {number[]} nums
 * @return {number[]}
 */
 var findDisappearedNumbers = function(nums) {
  nums.sort((a,b) => a < b);
  disappearedArray = [];
  for (let i of nums) {
    if (nums[i] + 2 == nums[i + 1]) {
      disappearedArray.push(nums[i] + 1);
    }
  }
  return disappearedArray;
};