/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// 先排序，再双指针，还得有个变量存数，防止重复
 var intersection = function(nums1, nums2) {
  // 先排序
  nums1.sort((a, b) => a - b);
  nums2.sort((a, b) => a - b);
  const l1 = nums1.length, l2 = nums2.length;
  // 创建指针
  let p1 = 0, p2 = 0;
  // 创建存储交集元素的数组
  const intersection = [];
  // 判断条件当至少有一个指针超出数组范围时，遍历结束
  while (p1 < l1 && p2 < l2) {
    // 指针所指位置的元素的值
    const number1 = nums1[p1], number2 = nums2[p2];
    //
    if (number1 === number2) {
      // 用来控制加入intersection中的元素唯一,长度为0说明是第一个push的，不用管上一个，如果和上一个元素不等才push，相等说明重复
      if (!intersection.length || number1 !== intersection[intersection.length - 1]) {
        intersection.push(number1);
      }
      // 同时两指针都右移
      p1++;
      p2++;
      // 如果两个数组不相等，把指向较小数字的指针右移一位
    } else if (number1 < number2) {
      p1++;
    } else {
      p2++;
    }
  }
  return intersection;
};
