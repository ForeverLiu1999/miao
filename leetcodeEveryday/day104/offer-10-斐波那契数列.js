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