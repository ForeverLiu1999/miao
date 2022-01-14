/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  // 创建一维数组
  const ret = [];
  if (!root) {
    return ret;
  }
  // 创建队列
  const q = [];
  q.push(root);
  while (q.length !== 0) {
    const currentLevelSize = q.length;
    // 创建二维数组
    ret.push([]);
    for (let i = 1; i <= currentLevelSize; ++i) {
      // 按照队列顺序弹出
      const node = q.shift();
      // 二维数组内push值
      ret[ret.length - 1].push(node.val);
      // 如果存在node的左右孩子就push进去
      if (node.left) {
        q.push(node.left);
      }
      if (node.right) {
        q.push(node.right);
      }
    }
  }

  return ret;
};