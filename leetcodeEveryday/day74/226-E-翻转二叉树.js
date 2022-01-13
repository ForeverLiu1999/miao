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
 * @return {TreeNode}
 */

// 时间复杂度O(N)
// 空间复杂度O(N)
 var invertTree = function(root) {
  // 判断根节点
  if (!root) {
    return null;
  }
  const left = invertTree(root.left);
  const right = invertTree(root.right);
  root.left = right;
  root.right = left;
  return root;
};

// 深度优先递归
var invertTree = function(root) {
  if(root === null) {
      return null; // 到达最底部时需要返回null,意味着空节点
  }
  // 将当前遍历到的root的左右孩子换位置
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
};