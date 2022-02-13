// offer-10-斐波那契数列
/**
 * @param {number} n
 * @return {number}
 */
//  答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
 var fib = function(n) {
  let n1 = 0, n2 = 1, sum;
  for (let i = 0; i < n; i++) {
    sum = (n1 + n2) % 1000000007;
    n1 = n2;
    n2 = sum;
  }
  return n1;
};

// 滚动数组空间复杂度O(1)
var fib = function (n) {
  const MOD = 1000000007;
  if (n < 2) {
    return n;
  }
  let p = 0, q = 0, r = 1;
  for (let i = 2; i <= n; ++i) {
    p = q;
    q = r;
    r = (p + q) & MOD;
  }
  return r;
}
