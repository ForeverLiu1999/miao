// 832-E-翻转图像
/**
 * @param {number[][]} image
 * @return {number[][]}
 */
//
 var flipAndInvertImage = function(image) {
  const n = image.length;
  const m = image[0].length;
  // 两层循环嵌套,遍历矩阵中每个数字
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m / 2; j++) {
      // 解构赋值交换
      // 翻转同一行内,左右变右左
      // 再翻转图片也就是所有1变成0,用异或^的方法
      [image[i][j], image[i][m - j]] = [1 ^ image[i][m - j], 1 ^ image[i][j]];
    }
  }
  return image;
};