/**
 * @param {number[]} nums
 * @return {number}
 */

// 因为多数元素出现次数大于一半，所以排序后中间那个数必是多数元素
// 时间复杂度n(logn)
 var majorityElement = function(nums) {
  nums.sort((a, b) => a - b);
  return nums[Math.floor(nums.length / 2)];
};

// 用obj对象记录每个数出现的次数，大于half的就是
// 时间复杂度: O(n) 只遍历一次
// 空间复杂度: O(n) obj中属性最多为n/2个
var majorityElement = function(nums) {
  let half = nums.length / 2;
  let obj = {};
  for (let num of nums) {
    obj[num] = (obj[num] || 0) + 1;
    if (obj[num] > half) {
      return num;
    }
  }
}

// 当元素和栈顶元素相等或空栈时入栈，否则出栈，最后栈中剩下的必然都是大于一半的那个元素
// 时间O(n) 循环一次nums
// 空间O(n)
var majorityElement = function (nums) {
  let stack = [];
  for (let n of nums) {
    let m = stack.length;
    if (stack[m - 1] === n || !m) {
      stack.push(n);
    } else {
      stack.pop();
    }
  }
  return stack[0];
}