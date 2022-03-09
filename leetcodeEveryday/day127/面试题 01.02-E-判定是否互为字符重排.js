// 面试题 01.02-E-判定是否互为字符重排
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
  return s1.split('').sort().toString() === s2.split('').sort().toString();
};

// 抵消法 找到一个删除一个
var CheckPermutation = function (s1, s2) {
  // 如果长度不对等直接返回false
  if (s1.length != s2.length) {
    return false;
  }
  // s2转换为数组
  s2 = s2.split('');
  // 遍历s1
  for (let s of s1) {
    if (s2.indexOf(s) == -1) {
      return false;
    } else {
      s2.splice(s2.indexOf(s), 1);
    }
  }
  return true;
}