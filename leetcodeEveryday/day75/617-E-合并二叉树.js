/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
 var mergeTrees = function(root1, root2) {
  // 如果左子节点为空，直接返回右子节点，如果右子节点为空，同理
  if (!root1) {
    return root2;
  }
  if (!root2) {
    return root1;
  }
  // 创建一个新的树用来存放合并后的二叉树，对应位置的节点的和相加
  let root = new TreeNode(root1.val + root2.val);
  root.left = mergeTrees(root1.left, root2.left);
  root.right = mergeTrees(root1.right, root2.right);
  return root;
};