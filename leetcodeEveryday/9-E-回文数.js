/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
  // 先转化成字符串
  let l =x.toString();
  // 定义left和right
  let [left, right] = [0, l.length - 1];
  // 小于0以及能整除10都必不为回文数
  if (x == 0) {
    return true;
  }
  if (x < 0 || x % 10 == 0) {
    return false;
  }
  // 所以只判断大于0
  if (x > 0) {
    while (left <=right) {
      // 最左比最右，次左比次右...
      if (l[left] !== l[right]) {
        return false;
      };
      left++;
      right--;
    }
    return true;
  }
};