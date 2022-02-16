// 509-E-斐波那契数列
/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  if (n === 0) return 0;
 let a = 1;
 let b = 1;
 let c;
 for (let i = 2; i < n; i++) {
   c = b + a;
   a = b;
   b = c;
 }
 return b;
};