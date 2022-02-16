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

var fib = function(n) {
  if (n < 2) {
      return n;
  }
  let p = 0, q = 0, r = 1;
  for (let i = 2; i <= n; i++) {
      p = q;
      q = r;
      r = p + q;
  }
  return r;
};