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
  if (root.left == null && root.right == null) {
    return 1;
  }
  // 不能理解
  let ans = Number.MAX_SAFE_INTEGER;
  // 计算左子树最小深度
  if (root.left != null) {
    ans = Math.min(minDepth(root.left), ans);
  }
  // 计算右子树最小深度
  if (root.right != null) {
    ans = Math.min(minDepth(root.right), ans);
  }
  // +1表示当前节点存在一个深度
  return ans + 1;
};

// 简化代码变好看
var minDepth = function (root) {
  // root为空时，说明高度0，高度都是大于等于0的数，所以0是最小值
  if (!root) {
    return 0;
  // 计算左子树最小深度
  } else if (root.left == null) {
    return minDepth(root.right) + 1;
  // 计算右子树最小深度
  } else if (root.right == null) {
    return minDepth(root.left) + 1;
  }
  // +1表示当前节点存在一个深度
  return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
}