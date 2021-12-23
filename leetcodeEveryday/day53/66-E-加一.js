/**
 * @param {number[]} digits
 * @return {number[]}
 */
 var plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    // 数字9时要进位，所以必为0
    if (digits[i] == 9) {
      digits[i] = 0;
    } else {
      // 其他数字加一就好
      digits[i] += 1;
      return digits;
    }
  }
  // 当所有位都进位时，长度加一
  digits = digits.length + 1;
  // 而且说明首位为一
  digits[0] = 1;
  return digits;
};