// 29-M-两数相除
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
// dividend被除数 divisor除数
// 用2^i去作为乘法基数，x*2^i=x<<i
// 从2^31试到2^0直到被除数被减少到比除数小
// 每个能满足除出来的最大的2的幂都加入答案
// 也可以理解为每次计算出答案的32位中某一位
 var divide = function(dividend, divisor) {
  const MAX = 2147483647, MIN = -2147483648;
  if (dividend == MIN && divisor == -1) return MAX;
  let a = Math.abs(dividend), b = Math.abs(divisor), res = 0;
  for(let i = 31; i >= 0; i--) {
    if ((a >>> i) >= b) {
      // 1<<31 = -2147483648,特殊处理
      if (i == 31) {
        a -= MAX;
        a -= 1;
        res -= MIN;
      } else {
        a -= b << i;
        res += 1 << i;
      }
    }
  }
  return (dividend > 0) == (divisor > 0) ? res : -res;
};