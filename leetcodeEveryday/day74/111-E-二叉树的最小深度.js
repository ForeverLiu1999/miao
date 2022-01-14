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

// 时间复杂度O(n),n是节点数量
 var minDepth = function(root) {
  // root为空时，说明高度0，高度都是大于等于0的数，所以0是最小值
  if (!root) {
    return 0;
  }
  // 左右子树都为空，说明此处数到此为止，高度为1,而root不为null，所以1是最小值
  if (!root.left && !root.right) {
    return 1;
  }
  // 左右都能走就递归向小的
  if (root.left && root.right) {
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
  }
  // 只有左边不存在，返回右边
  if (!root.left) {
    return 1 + minDepth(root.right);
  }
  // 只有右边不存在，返回左边
  if (!root.right) {
    return 1 + minDepth(root.left);
  }
};