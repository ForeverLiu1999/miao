// 45-M-跳跃游戏 II
/**
 * @param {number[]} nums
 * @return {number}
 */
 var jump = function(nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    // 在可覆盖区域内不断更新最大的覆盖区域
    nextIndex = Math.max(nums[i] + i, nextIndex);
    // 走到当前覆盖的最大区域时，更新下一步可到达的最大区域
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }
  return steps;
};

var jump = function (nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + i, nextIndex);
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }
  return steps;
}

var jump = function (nums) {
  let curIndex = 0;
  let nextIndex = 0;
  let steps = 0;
  for (let i = 0; i < nums.length - 1; i++) {
    nextIndex = Math.max(nums[i] + 1, nextIndex);
    if (i === curIndex) {
      curIndex = nextIndex;
      steps++;
    }
  }
  return steps;
}