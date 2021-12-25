/**
 * @param {number} n
 * @return {number[]}
 */
//  var countBits = function(n) {
//   const bits = new Array(n + 1).fill(0);
//   for (let i = 0; i <= n; i++) {
//       bits[i] = countOnes(i);
//   }
//   return bits
// };

// const countOnes = (x) => {
//   let ones = 0;
//   while (x > 0) {
//       x &= (x - 1);
//       ones++;
//   }
//   return ones;
// }

// 1.左右双指针，左指针选中第一个数右移，右指针选中最后一个数左移。如果左右指针和大于target，说明右指针需要左移。
// 2.当两数之和小于target，说明此轮移动没找到左+右=target，所以左指针右移，注意两指针只往中间移动，不往两边移动。
var twoSum = function(numbers, target) {
  var i = 0;
  var j = numbers.length - 1;
  while(i < j) {
    var sum = numbers[i] + numbers[j];
    if (sum > target) {
      j--;
    } else if (sum < target) {
      i++;
    } else {
      return [i + 1, j + 1];
    }
  }
};