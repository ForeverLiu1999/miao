/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
//  中序遍历左根右
var buildTree = function (inorder, postorder) {
  if (!postorder.length) return null;
  //  后序遍历左右根 所以postorder[postorder.length - 1]就是root
  let root = new TreeNode(postorder[postorder.length - 1]);
  // 在中序遍历序列中找值为root.val的索引
  let index = inorder.findIndex(number => number === root.val);
  // 中序遍历左根右 后序遍历左右根
  // inorder.slice(0, index)是中序遍历的左子树，postorder.slice(0, index)是后序遍历的左子树
  // inorder.slice(index + 1, inorder.length)是中序遍历的右子树，postorder.slice(index, postorder.length - 1)是后序遍历的右子树
  root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index));
  root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, postorder.length - 1));
  return root;
};