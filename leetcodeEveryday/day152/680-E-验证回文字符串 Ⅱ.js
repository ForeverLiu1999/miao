// 680-E-验证回文字符串 Ⅱ
/**
 * @param {string} s
 * @return {boolean}
 */
// 双指针
// 设置头尾指针,如果指向字符相同,则指针内移,继续检查.
// 如果指向的字符不同,还不能认定false,看看删一个字符(左字符或右字符)能否使得剩下的字符是回文串.
// 写一个判断回文串的辅助函数isPall,去判断[删去一个字符后]的子串,是否是回文串.
isPali = (str, l, r) => { // 判断str是否回文.
  // 限定边界
  while (l < r) {
    if (str[l] != str[r]) { // 指向的字符不一样,不是回文串.
      return false;
    }
    l++; // 指针相互逼近.
    r--;
  }
  return true; // 始终没有不一样,返回true.
}
 validPalindrome = str => {
  let l = 0, r = str.length - 1; // 头尾指针.
  while (l < r) {
    if (str[l] != str[r]) { // 指向的字符不一样，还不能认定false.
      return isPali(str, l + 1, r) || isPali(str, l, r - 1); //转为判断删掉一个字符(左字符或右字符)后,是否回文.
    }
    l++;
    r--;
  }
  return true;
};