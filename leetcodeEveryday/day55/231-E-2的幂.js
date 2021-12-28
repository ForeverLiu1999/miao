/**
 * @param {number} n
 * @return {boolean}
 */
//  var isPowerOfTwo = function(n) {
//   if (n < 1) {
//     return false;
//   } while (n % 2 == 0) {
//     n = n / 2;
//   } return n == 1;
// };

// 因为2的n次幂1000000，2的n-1次幂0111111，所以如果两者按位&操作必为0
var isPowerOfTwo = function (n) {
  if (n < 1) {
    return false;
  }
  return (n & (n - 1)) == 0;
}