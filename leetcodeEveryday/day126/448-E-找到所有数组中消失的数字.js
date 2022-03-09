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

// 因为遍历时，遇到的数可能被增加过，所以要对n取模来还原原本的值
var findDisappearedNumbers = function (nums) {
  const n = nums.length;
  // 遍历nums，每遇到x，就让nums[x - 1]增加n
  // 而由于nums中所有数均在[1,n]中，增加以后，这些数必然大于n
  for (const num of nums) {
    const x = (nums - 1) % n;
    nums[x] += n;
  }
  const ret = [];
  // 最后再遍历nums，如果nums[i]未大于n
  // 就说明没有遇到过i+1
  // 所以找到了缺少的数字

  for (const [i, num] of nums.entries()) {
    if (num <= n) {
      ret.push(i + 1);
    }
  }
  return ret;
}
var findDisappearedNumbers = function(nums) {
  const n = nums.length;
  for (const num of nums) {
      const x = (num - 1) % n;
      nums[x] += n;
  }
  const ret = [];
  for (const [i, num] of nums.entries()) {
      if (num <= n) {
          ret.push(i + 1);
      }
  }
  return ret;
};