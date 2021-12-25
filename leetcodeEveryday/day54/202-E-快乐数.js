/**
 * @param {number} n
 * @return {boolean}
 */
//  var isHappy = function(n) {
//   var sum = 0;
//   while (n > 0) {
//     var digit = n % 10;
//     sum += digit * digit;
//     n = (n - digit) / 10;
//   }
//   if (sum == 1) {
//     return true;
//   } else if (sum == 4) {
//     return false;
//   }
//   return isHappy(sum);
// };

var isHappy = function(n) {
  var appeared = [];
  while(true) {
    var sum = 0;
    while(n > 0) {
      var digit = n % 10;
      sum += digit * digit;
      n = (n - digit) / 10;
    }
    if (sum == 1) {
      return true;
    } else {
      for (var i = 0; i < appeared.length; i++) {
        if (sum == appeared[i]) {
          return false;
        }
      }
      appeared.push(sum);
      n = sum;
    }
  }
}