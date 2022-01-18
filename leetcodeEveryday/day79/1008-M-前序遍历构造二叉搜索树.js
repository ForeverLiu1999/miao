/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */

// 前序遍历根左右
// preorder[0]为根
// 此时有前序遍历和中序遍历，同105题:105-M-根据前序和中序遍历构造二叉树
var bstFromPreorder = function(preorder) {
  // 先序遍历去掉根，就是左子树和右子树
  const preorderCopy = preorder.slice(0);
    // 二叉搜索树的中序遍历是升序遍历
  // 如果把前序遍历排序得到的就是二叉搜索树的中序遍历
  const inorder = preorderCopy.sort((a, b) => (a - b));
  const buildTree = (preorder, inorder) => {
      if (preorder.length === 0) {
          return null;
      }
    // 前序遍历 根左右 所以preorder[0]一定是根节点
      let rootVal = preorder[0];
      let root = new TreeNode(rootVal);
// 在中序遍历中找到根节点，然后就可以分左右子树
      let inorderIndex = inorder.indexOf(rootVal);
          // 前序遍历根左右 中序遍历左根右
    // preorder.slice(1, inorderIndex + 1)是先序遍历的左子树，inorder.slice(0, inorderIndex)是中序遍历的左子树
    // preorder.slice(inorderIndex + 1)是先序遍历的右子树，inorder.slice(inorderIndex + 1)是中序遍历的右子树
      root.left = buildTree(
          preorder.slice(1, inorderIndex + 1),
          inorder.slice(0, inorderIndex)
      );
      root.right = buildTree(
          preorder.slice(inorderIndex + 1),
          inorder.slice(inorderIndex + 1)
      );
      return root;
  };
  return buildTree(preorder, inorder);
};