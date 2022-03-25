// 1047-E-删除字符串中的所有相邻重复项
/**
 * @param {string} s
 * @return {string}
 */
// 为防止消去导致相邻又消去，所以用栈来解决
//  var removeDuplicates = function(s) {
//    let result1 = [];
//    s = s.sort((a, b) => a - b);
//    for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i + 1]) result1.push(s[i]);
//    }
//   let set = new Set();
//   for (let j of result1) {
//     set.add(result1[j]);
//   }
//   return set.join("");
// };

var removeDuplicates = function (s) {
  let stack = [];
  for (let i of s) {
    if (stack.length && stack[stack.length - 1] === i) {
    stack.pop();
    } else {
      stack.push(i);
    }
  }
  return stack.join('');
}