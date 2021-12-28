/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */

// 转化为二进制字符串，如果xy长度不一致，在较短的前边补0
// 对比xy统计多少位不同
 var hammingDistance = function(x, y) {
  x = x.toString(2);
  y = y.toString(2);
  let maxLength = Math.max(x.length, y.length);
  // 补零
  x = x.padStart(maxLength, 0);
  y = y.padStart(maxLength, 0);
  let ans = 0;
  for (let i = 0; i < maxLength; i++) {
    if (x[i] !== y[i]) {
      ans++;
    }
  }
  return ans;
};