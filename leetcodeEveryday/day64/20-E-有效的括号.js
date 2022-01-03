/**
 * @param {string} s
 * @return {boolean}
 */

// 左括号入栈，看后续遍历是否有对应的右括号
// 而遇到右括号时检查栈顶左括号是对应的，如果不是对应类型或者无左括号则无效返回false
// 用哈希表存储没中括号可以方便判断括号类型，哈希表键为右括号，值为左括号
// 遍历结束后，如果栈中没有左括号，说明所有左括号闭合，返回true否则返回false
// 因为括号成对出现所以有效字符串的长度一定为偶数，因此在遍历之前可以判断如果长度为奇数，直接返回false，节省遍历次数

var isValid = function (s) {
  const n = s.length;
  if (n % 2 == 1) {
    return false;
  }
  const pairs = new Map([
    [")", "("],
    ["]", "["],
    ["}", "{"]
  ]);
  const stk = [];
  for (let ch of s) {
    if (pairs.has(ch)) {
      if (!stk.length || stk[stk.length - 1] !== pairs.get(ch)) {
        return false;
      }
      stk.pop();
    } else {
      stk.push(ch);
    }
  };
  return !stk.length;
};

// 解法一
let isValid = function (s) {
  let stack = [],
    length = s.length;
  if (length % 2) {
    return false;
  }
  for (let item of s) {
    switch (item) {
      case "{":
      case "[":
      case "(":
        stack.push(item);
        break;
      case "}":
        if (stack.pop() !== "{") return false;
        break;
      case "]":
        if (stack.pop() !== "[") return false;
        break;
      case ")":
        if (stack.pop() !== "(") return false;
        break;
    }
  }
  return !stack.length;
}

// 解法二
var isValid = function (s) {
  s = s.split("");
  let sl = s.length;
  if (sl % 2 == 1) {
    return false;
  }
  let map = new Map([[")", "("], ["]", "["], ["}", "{"]]);
  let stack = []
  for (let i of s) {
    if (map.get(i)) {
      if (stack[stack.length - 1] !== map.get(i)) return false;
      else stack.pop();
    } else {
      stack.push(i);
    }
  }
  return !stack.length;
}