/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 字母异位词实际上是字母排列顺序不同的字符串，分别排序，看排序后的字符串是哦福相等

var isAnagram = function (s, t) {
  return s.split('').sort().join('') === t.split('').sort().join('')
};

var isAnagram = function (s, t) {
  return s.split('').sort().toString() === t.split('').sort().toString()
};

var isAnagram = function (s, t) {
  return s.length == t.length && [...s].sort().join("") === [...t].sort().join("");
}

var isAnagram = function (s, t) {
  // 字母异位词实际上是字母排列顺序不同的字符串，分别排序，看排序后的字符串是否相等
  // 但如果长度不同说明字符串长度不同则绝不可能是字母异位词
  if (s.length !== t.length) {
    return false;
  }
  // 创建一个用来存储26个字母检查重复情况
  const table = new Array(26).fill(0);
  // 本次遍历s，每次遍历对应字母序号的那个元素++
  for (let i = 0; i < s.length; ++i) {
    table[s.codePointAt(i) - "a".codePointAt()]++;
  }
  // 两个for是兄弟关系，本次遍历t，减去s中的频次，如果有table[i]<0，则说明t包含了一个不在s中的额外字符，返回false即可
  for (let i = 0; i < t.length; ++i) {
    table[t.codePointAt(i) - "a".codePointAt(0)]--;
    if (table[t.codePointAt(i) - "a".codePointAt(0)] < 0) {
      return false;
    }
  }
  return true;
}