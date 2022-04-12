// 59-M-螺旋矩阵 II
/**
 * @param {number} n
 * @return {number[][]}
 */
// 左上->右上->右下->左下顺时针旋转，直至填入n^2个元素.
// 创建matrix为生成的矩阵,初始元素为0,由于填入的元素均为正数,所以检查每个位置如果不为0就说明已经访问过这个位置.
var generateMatrix = function (n) {
  const maxNum = n * n;
  let curNum = 1;
  // 创建二维数组容器
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let row = 0,
    column = 0;

  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ]; //顺时针四个方向变化右下左上
  let directionIndex = 0;
  // 逐个遍历
  while (curNum <= maxNum) {
    matrix[row][column] = curNum;
    curNum++;
    // 下一行和列
    const nextRow = row + directions[directionIndex][0],
      nextColumn = column + directions[directionIndex][1];
    // 这个变化方向写的真好
    if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
      directionIndex = (directionIndex + 1) % 4; // 顺时针旋转至下一个方向
    }
    row += directions[directionIndex][0];
    column += directions[directionIndex][1];
  }
  return matrix;
};
var generateMatrix = n => {
  const maxNum = n * n;
  let curNum = 1;
  const matrix = new Array(n).fill(0).map(() => new Array(n).fill(0));
  let row = 0,
    column = 0;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0]
  ];
  let directionIndex = 0;
  while (curNum <= maxNum) {
    matrix[row][column] = curNum;
    curNum++;
    const nextRow = row + directions[directionIndex][0];
    nextColumn = column + directions[directionIndex][1];
    if (nextRow < 0 || nextRow >= n || nextColumn < 0 || nextColumn >= n || matrix[nextRow][nextColumn] !== 0) {
      directionIndex = (directionIndex + 1) & 4;
    }
    row += directions[directionIndex][0];
    column += directions[directionIndex][1];

  }
  return matrix;
}
//