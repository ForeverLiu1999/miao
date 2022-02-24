// 剑指 Offer 10-E-II. 青蛙跳台阶问题
// f(n) = f(n-1)+f(n-2); n>2
// f(n) = 2; n=2;
// f(n) = 1; 0<=n<=1
/**
 * @param {number} n
 * @return {number}
 */
// 递归超时
 var numWays = function (n) {
  if (n <= 1) return 1;
  if (n === 2) return 2;
  return (numWays(n - 1) + numWays(n - 2)) % 1000000007;
};

// 为了解决递归超时问题，新建一个数组用来存储每一轮递归值，下次遇到就不需要计算而只需要查询
var numWays = function (n) {
  let cache = new Array(n + 1).fill(-1);
  count(n, cache);
  return cache[n];
};
function count(n, cache) {
  if (n <= 1) cache[n] = 1;
  if (n === 2) cache[n] = 2;
  if (cache[n] !== -1) return cache[n];
  else cache[n] = (count(n - 1, cache) + count(n - 2, cache)) % 1000000007;
  return cache[n];
}
