// 235-E-二叉搜索树的最近公共祖先
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 递归解法
// 二叉搜索树性质：如果p和q的val小于root.val，说明pq都在root的左子树，反之则在右子树
// 只要p.val和q.val不是都大于或都小于root.val，也就是说pq不在root的同一个子树
// 那就只有三种情况：
// 1 pq分居root的左右子树
// root就是p则q在p的子树中
// root就是q则p在q的子树中
// 而在这三种情况中，pq的最近公共祖先都是root
 var lowestCommonAncestor = function(root, p, q) {
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  return root;
};