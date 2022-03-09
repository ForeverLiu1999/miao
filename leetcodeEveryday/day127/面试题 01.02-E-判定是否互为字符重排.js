// 面试题 01.02-E-判定是否互为字符重排
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var CheckPermutation = function(s1, s2) {
  return s1.split('').sort().toString() === s2.split('').sort().toString();
};