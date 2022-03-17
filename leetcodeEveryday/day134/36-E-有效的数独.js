// 36-E-有效的数独
/**
 * @param {character[][]} board
 * @return {boolean}
 */
// 有效数独的三个条件:
// 同一个数字在同一行只出现一次
// 同一个数字在同一列只出现一次
// 同一个数字在每一个小九宫格只出现一次
// 可以用哈希表记录每一行每一列和每一个小九宫格中，每个数字出现的次数，只需要遍历一次，在遍历过程中更新哈希表中计数情况，并判断是否满足条件
// 第i行j列，0<=i j<9,该单元格行列下标分别为ij,所以其所在的小九宫格行列数分别为i/3 j/3，其中0<=i/3 j<3
// 由于数独中的数字范围1到9，因此可以使用数组计数
https://leetcode-cn.com/problems/valid-sudoku/solution/you-xiao-de-shu-du-by-leetcode-solution-50m6/
 var isValidSudoku = function(board) {
  const rows = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const columns = new Array(9).fill(0).map(() => new Array(9).fill(0));
  const subboxes = new Array(3).fill(0).map(() => new Array(3).fill(0).map(() => new Array(9).fill(0)));
  for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
          const c = board[i][j];
          if (c !== '.') {
              const index = c.charCodeAt() - '0'.charCodeAt() - 1;
              rows[i][index]++;
              columns[j][index]++;
              subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index]++;
              if (rows[i][index] > 1 || columns[j][index] > 1 || subboxes[Math.floor(i / 3)][Math.floor(j / 3)][index] > 1) {
                  return false;
              }
          }
      }
  }
  return true;
};