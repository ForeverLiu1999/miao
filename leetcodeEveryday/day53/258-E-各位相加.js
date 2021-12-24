/**
 * @param {number} num
 * @return {number}
 */
//  var addDigits = function(num) {
//   while(Math.floor(num / 10) > 0) {
//       num = num % 10 + Math.floor(num / 10);
//   }
//   return num;
// };


// 例如输入99992
var addDigits = function(num) {
  while (true) {
    var sum = 0;
    // 在这个while循环中，最终输出各位之和
    while (num > 0) {
      var digit = num % 10;
      sum += digit;
      num = (num - digit) / 10;
    }
    // 上面循环走完了得到38
    if (sum < 10) {
      return sum;
      // 进入此处递归
    } else {
      num = sum;
    }
  }
}

console.log(addDigits(38));