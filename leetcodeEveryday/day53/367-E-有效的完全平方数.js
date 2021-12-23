/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
  let x = 1, square = 1;
  while (square <= num) {
      if (square == num) {
          return true;
      }
      ++x;
      square = x * x;
  }
  return false;
};
console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));