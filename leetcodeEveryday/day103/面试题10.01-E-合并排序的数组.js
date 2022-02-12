// 面试题10.01-E-合并排序的数组
/**
 * @param {number[]} A
 * @param {number} m
 * @param {number[]} B
 * @param {number} n
 * @return {void} Do not return anything, modify A in-place instead.
 */

// B放到A的尾部，然后排序
 var merge = function(A, m, B, n) {
  A.splice(m, A.length - m, ...B);
  A.sort((a, b) => a - b);
};

// 双指针取其小放入新数组
var merge = function (A, m, B, n) {
  // 定义两个指针
  let pa = 0, pb = 0;
  // 定义sorted数组长度为n+m,再充满0占位
  const sorted = new Array(m + n).fill(0);
  var cur;
  // 限制指针的遍历范围
  while (pa < m || pb < n) {
    // 如果A中遍历完了，就去取B中值
    if (pa === m ) {
      cur = B[pb++];
    // 而如果B中遍历完了，就去取A中值
    } else if (pb === n) {
      cur = A[pa++];
      // A[pa] < B[pb]时，取其小值A[pa]
    } else if (A[pa] < B[pb]) {
      cur = A[pa++];
    } else {
      // A[pa] > B[pb]时，取其小值B[pb]
      cur = B[pb++];
    }
    sorted[pa + pb - 1] = cur;
  }
  // 把sorted数组中所有元素放入A中
  for (let i = 0; i != m + n; ++i) {
    A[i] = sorted[i];
  }
}