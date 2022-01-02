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