/**
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
  while(Math.floor(num / 10) > 0) {
      num = num % 10 + Math.floor(num / 10);
  }
  return num;
};
console.log(addDigits(38));