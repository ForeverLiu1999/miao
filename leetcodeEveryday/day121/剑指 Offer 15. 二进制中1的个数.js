// 剑指 Offer 15. 二进制中1的个数
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 简单粗暴之直接循环检查整数n的二进制每一位是否为1
// 当检查第i位时，让n与2的i次幂做与运算，当且仅当n的第i位为1时，运算结果不为0
 var hammingWeight = function(n) {
  let ret = 0;
  for (let i = 0; i < 32; i++) {
    // 此处使用<<i而不是>>i，因为n>>1会遇到负数(反码)
    // 而1<<i虽然也会遇到负数，但用!=0而不是>0就OK
    if ((n & (1 << i)) != 0) {
      ret++;
    }
  }
  return ret;
};