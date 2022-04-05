// 1013-E-将数组分成和相等的三个部分
/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 将数组分成三个部分
var canThreePartsEqualSum = arr => {
  // 对数组求所有元素的和
  let sum = arr.reduce((a, b) => a + b);
  let num = 3;
  let temp = 0;
  for (let a of arr) {
    // 每遍历一个元素,就取和
    temp += a;
    // 如果当取到某个元素时,如果有当前temp的值是数组所有元素和的三分之一,num从3减到2,temp归零,如果下一次遇到这个时间就是找到了第二个和与第三个和的边界
    if (temp === sum / 3) num--, temp = 0;
  }
  return num = 0;
}