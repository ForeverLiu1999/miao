// 541-E-反转字符串 II
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  const n = s.length;
  // 转化数组
  const arr = Array.from(s);
  // 周期2k
  for (let i = 0; i < n; i += 2 * k) {
    // 反转i到i+k
    reverse(arr, i, Math.min(i + k, n) - 1);
  }
  // 重新拼成字符串
  return arr.join('');
};
const reverse = (arr, left, right) => {
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
}

/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
//拼接字符串,从i开始拿k个反转的,加上i+k开始再拿k个不反转的.
var reverseStr = function (s, k) {
  let result = '';
  const len = s.length;
  for (let i = 0; i < len; i += 2 * k) {
    // 拼接字符串，从i开始拿k个反转的，加上i + k开始再拿k个不反转的
    // substr方法在字符串中从参数1位置开始抽取参数2个数目的字符
    result += s.substr(i, k).split('').reverse().join('') + s.substr(i + k, k);
  }
  return result;
};