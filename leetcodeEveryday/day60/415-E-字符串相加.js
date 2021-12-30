/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */

// 时间复杂度: O(max(length1, length2))
// 空间复杂度: O(1)

// 逐位相加，如果两个数字位数不同，在指针当前下标负数时返回0
// 等价于对位数较短的数字进行了补零操作，这样解决了两数数位不同情况
 var addStrings = function(num1, num2) {
  // 定义ij两个指针分别指向num12的末尾，add判断进位
  let i = num1.length - 1, j = num2.length - 1, add = 0;
  const ans = [];
  while (i >= 0 || j >= 0 || add != 0) {
    // 如果遍历过程中，num1或2当前无数字，则用0补位
    const x = i >= 0 ? num1.charAt(i) - "0" : 0;
    const y = j >= 0 ? num2.charAt(j) - "0" : 0;
    const result = x + y + add;
    // 产生进位时
    ans.push(result % 10);
    add = Math.floor(result / 10);
    i -= 1;
    j -= 1;
  }
  return ans.reverse().join("");
};

var addStrings = function (num1, num2) {
  let i = num1.length - 1, j = num2.length - 1, carry = 0, ans = [];
  while (i >= 0 || j >= 0 || carry != 0) {
    let c1 = i >= 0 ? num1.charAt(i) - "0" : 0, c2 = j >= 0 ? num2.charAt(j) - "0" : 0;
    let sum = c1 + c2 + carry;
    ans.push(sum % 10);
    carry = Math.floor(sum / 10);
    i--;
    j--;
  }
  return ans.reverse().join("");
}
