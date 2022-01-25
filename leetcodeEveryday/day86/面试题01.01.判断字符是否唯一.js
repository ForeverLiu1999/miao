// 面试题01.01.判断字符是否唯一
/**
 * @param {string} astr
 * @return {boolean}
 */
var isUnique = function (astr) {
  let flag = true;
  if (astr.length !== new Set(astr).size) {
    flag = false;
  }
  return flag;
};

var inUnique = function (astr) {
  let arr = [...astr];
  num = 0;
  arr.map((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      num++;
    }
  })
  return num === astr.length;
}