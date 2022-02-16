// 自顶向下暴力法 110-E-平衡二叉树
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
 * @return {boolean}
 */
// 递归 后序遍历左右中 当前左右子树高度相差大于1返回-1
var isBalanced = function (root) {
  // 1 确认递归函数参数以及返回值
  const getDepth = function (node) {
    // 2 确定递归函数终止条件
    if (node === null) {
      return 0;
    }
    // 3 确认单层递归逻辑
    let leftDepth = getDepth(node.left); // 左子树高度
    if (leftDepth === -1) {
      return -1;
    }
    let rightDepth = getDepth(node.right); // 右子树高度
    if (rightDepth === -1) {
      return -1;
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }
  return getDepth(root) === -1 ? false : true;
};

// 自顶向下暴力法
// 自顶向下的比较每个节点的左右子树最大高度差，如果二叉树中每个节点的左右子树最大高度差小于等于1，
// 达到平衡二叉树要求时，此时则是平衡二叉树
var depth = function (node) {
  if (!node) return -1;
  return 1 + Math.max(depth(node.left), depth(node.right));
}
var isBalanced = function (root) {
  if (!root) return true;
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}
