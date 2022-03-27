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

