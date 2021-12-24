/**
 * @param {number} num
 * @return {boolean}
 */
 function isNotFour(num) {
  const remain = num % 10;
  if (remain === 4 || remain === 6) {
    return true;
  }
  return false;
}

var isPowerOfFour = function(num) {
  if (num === 1) return true;
  if (num <= 0 || !isNotFour(num)) return false;
  while (num > 1) {
    if (!isNotFour(num)) return false;
    let remain = num % 4;
    if (remain !== 0) return false;
    num = num / 4;
  }
  return true;
};