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
 * @return {number}
 */

// 递归
 var maxDepth = function(root) {
  //  递归最重要的终止条件，第一次生效就是在最大深度的叶子节点
  if (!root) {
    return 0;
  } else {
    // 分别求左右子树最大高度
    const left = maxDepth(root.left);
    const right = maxDepth(root.right);
    // 本身也算高度，所以+1
    return Math.max(left, right) + 1;
  }
};