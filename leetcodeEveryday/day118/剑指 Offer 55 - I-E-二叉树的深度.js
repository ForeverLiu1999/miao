/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 递归解法
// 监控上一层的深度p 使用Math.max(max, p)迭代取最大深度
var maxDepth = function (root) {
  if (!root) return 0;
  let max = 0
  const DFS = (node, p) => {
    if (!node) return null;
    max = Math.max(max, p + 1);
    node.left && DFS(node.left, p + 1);
    node.right && DFS(node.right, p + 1);
  }
  DFS(root, 0);
  return max;
};