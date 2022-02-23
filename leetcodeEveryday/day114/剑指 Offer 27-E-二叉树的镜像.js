// 剑指 Offer 27-E-二叉树的镜像
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// 递归的简单实现
// 从上到下依次交换每个节点的左右节点
 var mirrorTree = function(root) {
   if (!root) return null;
  let mid = root.left;
  root.left = root.right;
  root.right = mid;
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
};