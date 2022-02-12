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

//