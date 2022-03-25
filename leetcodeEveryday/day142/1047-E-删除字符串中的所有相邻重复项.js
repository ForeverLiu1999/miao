// 1047-E-删除字符串中的所有相邻重复项
/**
 * @param {string} s
 * @return {string}
 */

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

// 为防止无法进行消去后导致相邻又消去，所以用栈来解决
var removeDuplicates = function (s) {
  let stack = [];
  for (let i of s) {
    // 如果还有元素存在，且当前字母和栈顶字母相同，就消消乐
    if (stack.length && stack[stack.length - 1] === i) {
    stack.pop();
    } else {
      // 否则就将其入栈
      stack.push(i);
    }
  }
  // 因为得到的是数组，所以还要join成字符串
  return stack.join('');
}