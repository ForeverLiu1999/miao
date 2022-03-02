// 剑指 Offer 15. 二进制中1的个数
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
// 简单粗暴之直接循环检查整数n的二进制每一位是否为1
// 当检查第i位时，让n与2的i次幂做与运算，当且仅当n的第i位为1时，运算结果不为0
var hammingWeight = function (n) {
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

// 位运算
// https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/solution/er-jin-zhi-zhong-1de-ge-shu-by-leetcode-50bb1/
var hammingWeight = function (n) {
  let ret = 0;
  while (n) {
    // cur&cur-1 消掉最右边的第一个1 cur: 111 => cur-1: 110
    n &= n - 1;
    // ret是发生的次数
    ret++;
  }
  return ret;
};

// 初二余一
