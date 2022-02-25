// 409-E-最长回文串
/**
 * @param {string} s
 * @return {number}
 */
// 用set集合存放，如果新查询的已在集合中存在 res+2 而如果最后还有一个字符+1
 var longestPalindrome = function(s) {
  let temp = new Set();
  let sum = 0;
  s.split("").forEach(c => {
    if (temp.has(c)) {
      temp.delete(c);
      sum += 2;
    } else {
      temp.add(c);
    }
  })
  return sum + (sum.size > 0 ? 1 : 0);
};