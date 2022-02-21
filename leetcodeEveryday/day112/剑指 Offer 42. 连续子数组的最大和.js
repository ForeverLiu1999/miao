// 剑指 Offer 42. 连续子数组的最大和
/**
 * @param {number[]} nums
 * @return {number}
 */
 function LSS(list) {
  const len = list.length;
  let max = -Number.MAX_VALUE;
  let sum = 0;
  for (let i = 0; i < len; i++) {
    sum = 0;
    for (let j = i; j < len; j++) {
      sum += list[j];
      if (sum > max) {
        max = sum;
      }
    }
  }
  return max;
}
