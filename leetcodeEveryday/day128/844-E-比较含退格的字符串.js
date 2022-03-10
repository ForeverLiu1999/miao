// 844-E-比较含退格的字符串
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 双指针解法捏
 var backspaceCompare = function(s, t) {
// ij分别指向st的末尾字符
  let i = s.length - 1,
      j = t.length - 1,
      // 在准备两个skipS和skipT分别存放st字符串中的#数量
      skipS = 0,
      skipT = 0;
      // 外层大循环
      // 从后往前遍历s
      // 有三种情况
      // 1如果当前字符是# 则skipS自增1
      // 2如果当前字符不是# 且skipS不为0 则skipS自减1
      // 3如果当前字符不是# 是skipS为0 则代表当前字符不会被消除 用于和t中的当前字符作比较
      while (i >= 0 || j >= 0) {
        // s循环
        while (i >= 0) {
          if (s[i] === '#') {
            skipS++;
            i--;
          } else if (skipS > 0) {
            skipS--;
            i--;
          } else break;
        }
        // t循环
        while (j >= 0){
          if (t[j] === '#') {
            skipT++;
            j--;
          } else if (skipT > 0) {
            skipT--;
            j--;
          } else break;
        }
        // 对比过程中出现st当前字符不匹配则遍历结束返回false
         if (s[i] !== t[j]) return false;
         i--;
         j--;
      }
      // 而只有st都遍历结束。且都能一一匹配则返回true
      return true;
};