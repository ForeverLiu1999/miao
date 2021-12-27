/**
 * @param {number} columnNumber
 * @return {string}
 */

// 核心代码 let remain = (n - 1) % 26;

// // 写法一
// var convertToTitle = function(columnNumber) {
//   if (columnNumber <= 0) {
//     return "";
//   }
//   let res = [];
//   while(columnNumber) {
//     columnNumber--; // 通过让n-1, 使得余数remain减少1
//     let remain = columnNumber % 26;
//     res.unshift(String.fromCharCode(remain + 65));
//     columnNumber = Math.floor(columnNumber / 26);
//   }
//   return res.join("");
// };


// 写法二
var convertToTitle = function(n) {
  if (n <= 0) {
    return "";
  }
  let res = [];
  while (n) {
    let remain = n % 26 ? n % 26 : 26;
    res.unshift(String.fromCharCode(remain + 64));
    n = Math.floor((n - remain) / 26);
  }
  return res.join("");
}