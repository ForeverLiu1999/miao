// 54-M-螺旋矩阵
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 按层模拟,从外层到内层
// 从左上到右上(top, left) => (top, right),再到右下再到左下(top + 1, right)=>(bottom, right)最终返回左上.
// 如果left < right且top < bottom,则从右到左遍历下侧元素,依次为(bottom, right - 1)到(bottom, left + 1).
// 以及从下到上遍历左侧元素,依次为(bottom, left)到(top + 1, left).
// 遍历完当前层的元素之后,将left和top分别增加1,将right和bottom分别减少1,进入下一层继续遍历,直到遍历完所有元素为止.
// 1a 1a 1a 1a 1a 1a
// 1d 2  2  2  2  1b
// 1d 2  2  2  2  1b
// 1d 2  2  2  2  1b
// 1d 1c 1c 1c 1c 1b
var spiralOrder = function(matrix) {
  // 特殊情况
  if (!matrix.length || !matrix[0].length) {
      return [];
  }
// 定义行列
  const rows = matrix.length, columns = matrix[0].length;
  const order = [];
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
  // 从左上到右上(top, left) => (top, right)
  while (left <= right && top <= bottom) {
      for (let column = left; column <= right; column++) {
          order.push(matrix[top][column]);
      }
      // 再到右下再到左下(top + 1, right)=>(bottom, right)
      for (let row = top + 1; row <= bottom; row++) {
          order.push(matrix[row][right]);
      }
      // 如果left < right且top < bottom,则从右到左遍历下侧元素,依次为(bottom, right - 1)到(bottom, left + 1)
      if (left < right && top < bottom) {
          for (let column = right - 1; column > left; column--) {
              order.push(matrix[bottom][column]);
          }
          // 以及从下到上遍历左侧元素,依次为(bottom, left)到(top + 1, left)
          for (let row = bottom; row > top; row--) {
              order.push(matrix[row][left]);
          }
      }
      [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
};

var spiralOrder = matrix => {
  if (!matrix.length || !matrix[0].length) {
    return [];
  }
  const rows = matrix.length, columns = matrix[0].length;
  const order = [];
  let left = 0, right = columns - 1, top = 0, bottom = rows - 1;
  while (left <= right && top <= bottom) {
    for (let column = left; column <= right; column++) {
      order.push(matrix[top][column]);
    }
    for (let row = top + 1; row <= bottom; row++) {
      order.push(matrix[row][right]);
    }
    if (left < right && top < bottom) {
      for (let column = right - 1; column > left; column--) {
        order.push(matrix[bottom][column]);
      }
      for (let row = bottom; row > top; row--) {
        order.push(matrix[row][left]);
      }
    }
    [left, right, top, bottom] = [left + 1, right - 1, top + 1, bottom - 1];
  }
  return order;
}