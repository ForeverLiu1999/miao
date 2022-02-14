// offer 21-E-调整数组顺序使奇数位于偶数前面
  /**
   * @param {number[]} nums
   * @return {number[]}
   */
  var exchange = function(nums) {
    let odd = [];
    let even = [];
    let result = [];
    for (let i = 0; i <= nums.length; i++) {
      if (nums[i] % 2 == 0) even.push(nums[i]);
      if (nums[i] % 2 == 1) odd.push(nums[i]);
    }
    return result = odd.concat(even);
  };

  var exchange = function (nums) {
    return nums.sort((a,b) => (b % 2 - a % 2));
  }