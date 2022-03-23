// 345-E-反转字符串中的元音字母
/**
 * @param {string} s
 * @return {string}
 */
// 双指针
// 指针i指向s首，指针j指向s尾，i右移j左移，直到遇到元音字母
// 如果i<j则交换i和j指向的元素
var reverseVowels = function(s) {
  const n = s.length;
  const arr = Array.from(s);
  let i = 0, j = n - 1;
  // 设置双指针的遍历范围
  while (i < j) {
    while (i < n && !isVowel(arr[i])) {
      ++i;
    }
    while (j > 0 && !isVowel(s[j])) {
      --j;
    }
    if (i < j){
      // ES6交换
      [[i], [j]] = [[j], [i]];
      ++i;
      --j;
    }
  }
  // 拼成字符串
  return arr.join('');
};

// 是否是元音字母
const isVowel = (ch) => {
  return "aeiouAEIOU".indexOf(ch) >= 0;
}