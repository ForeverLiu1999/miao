// 557-E-反转字符串中的单词III
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  // 开辟一个新字符串
  let ret = [];
  let l = s.length;
  let i = 0;
  // 然后从头到尾遍历原字符串
  while (i < l) {
    let start = i;
    //  此时找到了一个单词，并能得到单词的起止位置。随后，根据单词的起止位置，直到找到空格为止
    while (i < l && s.charAt(i) != " ") {
      i++;
    }
    //  可以将该单词逆序放到新字符串当中。如此循环多次，直到遍历完原字符串
    for (let p = start; p < i; p++) {
      ret.push(s.charAt(start + i - 1 - p));
    }
    while (i < l && s.charAt(i) == " ") {
      i++;
      ret.push(" ");
    }
  }
  // 数组转为字符串
  return ret.join('');
};