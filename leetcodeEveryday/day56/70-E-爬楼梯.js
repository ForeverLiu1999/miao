/**
 * @param {number} n
 * @return {number}
 */

// 递归1 因为爬第一级一种：1 第二级两种：1 2 第三级三种：1+1+1 1+2 2+1 第四级五种 所以n级楼梯有(n-2)+(n-1)种
// 所以其实是一个抽象的斐波那契数列，力扣官方题解的滚动数组解释的非常好
// 时间复杂度：O(2的n次幂)
// 空间复杂度；O(n)
 var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};

// fibb
var climbStairs = function(n) {
  if (n <= 2) {
      return n;
  }
  let f = [];
  f[n] = f[n + 1];
  f[1] = 1;
  f[2] = 2;
  for ( i = 3; i <= n; i++) {
      f[i] = f[i - 1] + f[i - 2];
  }
  return f[n];
}

// 递归2
// 缺点重复的多，有待优化
var climbStairs = function(n) {
  if(n == 1) {
    return 1;
  }
  if( n == 2) {
    return 2;
  }
  return climbStairs(n - 1) + climbStairs(n - 2);
};

// 递归3 因为递归2中重复很多，所以创建一个数组用来存储已经计算的结果，如果下次遇到这个数就直接返回就好了
// 时间复杂度O(n) 空间复杂度O(n)
// 第一次优化仍然超出时间限制
var climbStairs = function(n, memo) {
  let memo = [];
  if (memo[n] > 0) {
    return memo[n];
  }
  if(n == 1) {
    return 1;
  }
  if( n == 2) {
    return 2;
  }
  else {
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);
  }
  return memo[n];
};