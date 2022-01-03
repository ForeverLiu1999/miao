/**
 * @param {string} columnTitle
 * @return {number}
 */

// 相当于26进制转成10进制
// 比如FXSHRXW:[6, 24, 19, 8, 18, 24, 23]
// 23*26^0 + 24*26^1 + 18*26^2 + 8*26^3 + 19*26^4 + 24*26^5 + 6*26^6
// 列序号number初始化为0，从右往左遍历列名称，对于列名称的从右往左第i位(0<=i<n)，如果是第k个字母(1<=k<=26),则将列序号的值增加k*26^i,遍历结束时即可得到序列号

 var titleToNumber = function(columnTitle) {
  let number = 0;
  let multiple = 1;
  for (let i = columnTitle.length - 1; i >= 0; i--) {
    const k = columnTitle[i].charCodeAt() - "A".charCodeAt() + 1;
    number += k * multiple;
    multiple *= 26;
  }
  return number;
};