// 520-E-检测大写字母
// https://leetcode-cn.com/problems/detect-capital/
/**
 * @param {string} word
 * @return {boolean}
 */
//  var detectCapitalUse = function(word) {
//   word = word.split('');
//   let flag;
//   // 如果首字母为大写，则有两种情况
//   if (word[0].charCodeAt() >= 65 && word[0].charCodeAt() <= 90) {
//     // 第一种情况 第二个字母为大写，那么如果后续字母都是大写就true，否则false
//     if (word[1].charCodeAt() >= 65 && word[1].charCodeAt() <= 90) {
//       for (let i = 2; i < word.length; i++) {
//         if (word[i].charCodeAt() < 65 || word[i].charCodeAt() > 90) {
//           flag = false;
//         }
//       }
//     }
//     // 第二种情况 第二个字母为小写，那么如果后续字母都是小写就true，否则就false
//     if (word[1].charCodeAt() >= 97 && word[1].charCodeAt() <= 122) {
//       for (let i = 2; i < word.length; i++) {
//         if (word[i].charCodeAt() < 65 || word[i].charCodeAt() > 90) {
//           flag = false;
//         }
//       }
//     }
//   }
//   // 而如果首字母为小写，则后续必须全为小写
//   if (word[0].charCodeAt() >= 97 && word[0].charCodeAt() <= 122) {
//     for (let j = 1; j < word.length; j++) {
//       if (word[j].charCodeAt() < 97 || word[j].charCodeAt() > 122) {
//         flag = false;
//       }
//     }
//   }
//   return flag;
// };

var detectCapitalUse = function(word) {
  // 若第 1 个字母为小写，则需额外判断第 2 个字母是否为小写
  if (word.length >= 2 && word[0] === word[0].toLowerCase() && word[1] === word[1].toUpperCase()) {
      return false;
  }

  // 无论第 1 个字母是否大写，其他字母必须与第 2 个字母的大小写相同
  for (let i = 2; i < word.length; ++i) {
      if (word[i] === word[i].toLowerCase() ^ word[1] === word[1].toLowerCase()) {
          return false;
      }
  }
  return true;
};