/**
 * @param {number} n
 * @return {number}
 */
 var fib = function(n) {
  let a = 1;
  let b = 1;
  let c;
  for (let i = 2; i < k; i++) {
    c = b + a;
    a = b;
    b = c;
  }
  return c;
};