/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */

// ab对齐，补齐0，从右往左遍历逐位相加并用carry记录是否进位
// 每一位计算结果都放在res数组，最后转成字符串

 var addBinary = function(a, b) {
  // 对齐操作
  while (a.length > b.length) b = "0" + b;
  while (a.length < b.length) a = "0" + a;
  // 创建res数组
  let res = new Array(a.length);
  let sum = 0;
  let carry = 0; // 进位
  for (let i = a.length - 1; i >= 0; i--) {
    sum = Number(a[i]) + Number(b[i]) +carry;
    if (sum >= 2) {
      res[i] = sum - 2;
      carry = 1;
    } else {
      res[i] = sum;
      carry = 0;
    }
  }
  if (carry) res.unshift(1); // 循环结束还要进位1，则在res数组前端加一个1
  return res.join("");
};