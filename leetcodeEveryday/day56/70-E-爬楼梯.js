/**
 * @param {number} n
 * @return {number}
 */

// 递归 因为爬第一级一种：1 第二级两种：1 2 第三级三种：1+1+1 1+2 2+1 第四级五种 所以n级楼梯有(n-2)+(n-1)种
// 所以其实是一个抽象的斐波那契数列，力扣官方题解的滚动数组解释的非常好
 var climbStairs = function(n) {
  let p = 0, q = 0, r = 1;
  for (let i = 1; i <= n; ++i) {
    p = q;
    q = r;
    r = p + q;
  }
  return r;
};