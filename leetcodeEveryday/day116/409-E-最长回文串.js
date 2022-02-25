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

// 409-E-最长回文串
/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
  /*
  A-Z,a-z字母出现次数的存放数组，默认每个字母出现0次
  122-65=57，还需加1来存放最后的小写字母z，故数组长度为58
  */
  let charTimeAry = new Array(58).fill(0);

  // 遍历字符串
  for(let char of s) {
      /*
      统计每个字母出现的次数
      65是大写字母A的Unicode编码，这样可以从索引0开始计数，减少数组长度
      */
      charTimeAry[char.charCodeAt() - 65] += 1;
  }

  // 最大长度
  let maxSize = 0;

  // 遍历次数数组
  for(let time of charTimeAry) {
      /*
      关键点，计算长度
      如果字符出现次数是偶数，则说明可以组成回文（对称），故该偶数的次数需计入到最大长度中
      例如，字母A出现3次，则其中的偶数次可以构造回文的一部份，即可以用 3/2 来获取有几个偶数部分。
      得出偶数部分的个数后，再乘以2，获取字母可构成回文的次数，即 (3 / 2) * 2
      又因在JavaScript中，Number类型是64位双精度浮点型，故需利用ParseInt()这一API来取整
      */
      maxSize += parseInt((time / 2), 10) * 2;
  }

  // 如果计算出的长度小于字符串长度，则说明必然是奇数长度的回文，故长度需再加一
  return maxSize < s.length ? maxSize + 1 : maxSize;
};