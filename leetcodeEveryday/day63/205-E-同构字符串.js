/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

// 维护两张哈希表,从左至右遍历两张表的字符串并实时更新
// 如果当前下标s[index]对应字符已存在映射且不为t[index]或t[index]对应字符已存在映射且不为s[index]，则说明两个字符串无法构成同构，返回false
// 如果遍历结束未出现冲突则说明两字符串是同构的，返回true

 var isIsomorphic = function(s, t) {
  const s2t = {};
  const t2s = {};
  const len = s.length;
  for (let i = 0; i < len; ++i) {
    const x = s[i], y = t[i];
    if ((s2t[x] && s2t[x] !== y) || (t2s[y] && t2s[y] !== x)) {
      return false;
    }
    s2t[x] = y;
    t2s[y] = x;
  }
  return true;
};

// indexOf
var isIsomorphic = function(s, t) {
  for (let i = 0; i < s.length; i++)
      if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
  return true
};

// lastIndexOf
var isIsomorphic = function(s, t) {
  for (let i = s.length; i--;)
      if (s.lastIndexOf(s[i]) !== t.lastIndexOf(t[i])) return false
  return true
};

// 哈希索引
var isIsomorphic = function(s, t) {
  let S = Object.create(null), T = Object.create(null), i = -1
  while (i++ < s.length) {
      const a = s[i], b = t[i]
      if (S[a] !== T[b]) return false
      S[a] = i
      T[b] = i
  }
  return true
}
var isIsomorphic = function(s, t) {
  let S = Object.create(null), T = Object.create(null), i = -1
  while (i++ < s.length) {
      const a = s[i], b = t[i]
      if (S[a] && S[a] !== b || T[b] && T[b] !== a) return false
      S[a] = b
      T[b] = a
  }
  return true
}
