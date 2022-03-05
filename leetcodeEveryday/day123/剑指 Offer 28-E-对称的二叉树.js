// 剑指 Offer 28-E-对称的二叉树
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
// 比较的是左右子树不是节点
// 节点为空的情况，一个节点的左空右不空或者左不空右空都false，都空true
// 然后再讨论都不为空的情况比较值
 var isSymmetric = function(root) {
  return check(root, root);
};
const check = (leftPtr, rightPtr) => {
  // 如果只有根节点，返回true
  if (!leftPtr && rightPtr) return true;
  // 而如果左右节点只存在一个，则返回false
  if (!leftPtr || rightPtr) return false;
  // 两对
  return leftPtr.val === rightPtr.val && check(leftPtr.left, rightPtr.right) && check(leftPtr.right, rightPtr.left);
}