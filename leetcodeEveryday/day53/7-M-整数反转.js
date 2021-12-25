/**
 * @param {number} x
 * @return {number}
 */
// var reverse = function (x) {
//   let result = 0;
//   while (x) {
//     result = result * 10 + x % 10;
//     // 判断溢出
//     if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) {
//       return 0;
//     }
//     x = Math.floor(x / 10);
//   }
//   return result;
// };

// var reverse = function(x) {
//   let result = 0;
//   while(x !== 0) {
//       result = result * 10 + x % 10; // 取出末尾,不用管正负
//       x = (x / 10) | 0; // 去除末位,0强制转换为32位有符号整数,通过|0取整，无论正负只移除小数点部分，整数向下取整，负数向上

//   }
//   return (result | 0) === result ? result : 0; // result | 0 超过32位整数转换不等于自己，用于溢出判断
// };

