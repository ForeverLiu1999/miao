// 面试题50-E-第一个只出现一次的字符
/**
 * @param {string} s
 * @return {character}
 */

// 邪道速通
 var firstUniqChar = function(s) {
  for (let n of s) {
    if (s.indexOf(n) === s.lastIndexOf(n)) return n;
  }
  return ' ';
};

// 找出第一个数的位置，然后往后遍历，看有没有相同的，如果找到了就是出现了不止一次，然后下一个数
var firstUniqChar = function (s) {
  for (let i = 0; i < s.length; i++) {
    a = s.indexOf(s[i]);
    b = s.indexOf(s[i], a + 1);
    if (b == -1) return s[i];
  }
  return ' ';
}

// 第一次遍历用哈希表存储每个元素出现的次数
var firstUniqChar = function (s) {
  // _.countBy方法创建一个由键组成的对象，
  // 这些键是通过运行iteratee的collection的每个元素的结果生成的。
  // 每个 key 的对应值是iteratee返回 key 的次数。
  const frequency = _.countBy(s);
  // entries() 方法返回一个数组的迭代对象，该对象包含数组的键值对 (key/value)。
  for (const [i, ch] of Array.from(s).entries()) {
    if (frequency[ch] === 1) {
      return ch;
    }
  }
  return '';

}