// 463-E-岛屿的周长
/**
 * @param {number[][]} grid
 * @return {number}
 */
// 一块土地有四个边长，但一旦两块土地接壤就会少两条边长，所以土地周长 = 土地块数 * 4 - 2 * 接壤的边数
// 所以可以遍历这个矩阵，用land记录土地块数，遍历到土地就land++，border是接壤边数，如果一块土地的右边或下边也是土地则说明有接壤，border++
// 所以4 * land - 2 * border即为周长
 var islandPerimeter = function(grid) {
   let land = 0;
   let border = 0;
   for (let i = 0; i < grid.length; i++) {
     for (let j = 0; j < grid[0].length; j++) {
       if (grid[i][j] == 1) {
         land++;
        // 如果右边是陆地就说明接壤
         if (i < grid.length - 1 && grid[i + 1][j] == 1) {
           border++;
         }
        // 如果下边是陆地也说明接壤
         if (j < grid[0].length - 1 && grid[i][j + 1] == 1) {
           border++;
         }
       }
     }
   }
   return 4 * land - 2 * border;
};

// var islandPerimeter = function (grid) {
//   let land = 0;
//   let border = 0;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < gird[0].length; j++) {
//       if (grid[i][j] == 1) {
//         land++;
//         if (i < grid.length - 1 && grid[i][j + 1] == 1) {
//           border++;
//         }
//       }
//     }
//   }
//   return 4 * land - 2 * border;
// }

// 从第一个土地开始深度搜索
// 土地和土地相连不会产生周长,但土地与海洋相连就会产生一个周长，而从土地连接矩阵的边界也会产生一个周长
// 但如果dfs对当前节点上下左右递归，下一个递归的点又对上下左右递归，就会产生重复访问，计算结果会有重复
// 所以遍历过的土地节点把值改为2，表示遍历过了，区分于1和0
// DFS从一个点向四周递归，目标是直到遇到矩阵边界或海水
// 从上而下递归调用，随着递归逐渐出栈，子问题的解自下而上地返回，最后得到结果
var islandPerimeter = function (grid) {
  const dfs = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) {
      return 1; // 当前正好越界，说明穿过了一个变，周长+1
    }
    if (grid[i][j] == 0) { // 从土地来到了海水，说明穿过了一个边界，周长+1
      return 1;
    }
    if (grid[i][j] == 2) { // 之前访问过。直接返回，返回0，周长不动
      return 0;
    }
    // 到此，当前点为1，将他改为2，代表已访问
    grid[i][j] = 2;
    // 继续朝上下左右四个方向递归，直到遇到矩阵边界或水，随着递归出栈向上返回，得到结果
    return dfs(i - 1, j) + dfs(i + 1, j) + dfs(i, j - 1) + dfs(i, j + 1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == 1) {
        return dfs(i, j); // 递归入口从第一块土地开始
      }
    }
  }
  return 0;
};


