/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
// 递归判断所有节点情况
// 时间复杂度O(n)
 var isSameTree = function(p, q) {
  //  如果两棵树当前节点都为null时返回true
  if (p == null && q == null) {
    return true;
  }
  // 一个为null另一个不为null时说明不同，返回false
  if (p == null || null) {
    return false;
  }
  // 两个节点都有值但不相等，返回false
  if (p.val != q.val) {
    return false;
  }
  // 递归向当前两节点的left和right
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};