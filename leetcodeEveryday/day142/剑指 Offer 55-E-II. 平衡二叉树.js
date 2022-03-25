// 剑指 Offer 55-E-II. 平衡二叉树
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 递归后序遍历左右中 当前左右子树高度相差大于1返回-1
 var isBalanced = function(root) {
  // 确认递归函数参数以及返回值
  const getDepth = function (node) {
    // 2 确认递归函数终止条件
    if (node === null) {
      return 0;
    }
    // 3 确认单层递归逻辑
    let leftDepth = getDepth(node.left); // 左子树高度
    if (leftDepth == -1) return -1;
    let rightDepth = getDepth(node.right); // 右子树高度
    if (rightDepth == -1) return -1;
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }
  return getDepth(root) === -1 ? false : true;
};