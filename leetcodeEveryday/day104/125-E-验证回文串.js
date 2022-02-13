// 125-E-验证回文串
/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  // 正则表达式判断
  var a=s.toLocaleLowerCase().match(/[A-Za-z0-9]+/g);
  // 如果a为null
  if(!a) return true;
  // 把字符串转为数组
  var slong=a.join("");
  // 双指针
  var left=0;right=slong.length-1;
  // 设置循环范围
  while(left<right){
      if(slong[left]==slong[right]){
          left++;
          right--;
      }else{
      return false
      }
  }
  return true
  };