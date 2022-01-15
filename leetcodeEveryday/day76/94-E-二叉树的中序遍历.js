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
 * @return {number[]}
 */

// 递归隐式地使用一个栈
// 中序遍历左中右，而且对左右子树也是这种操作，所以适合递归解决
var inorderTraversal = function(root) {
  const res = [];
  // 递归停止条件就是碰到空节点
  const inorder = (root) => {
      if (!root) {
          return;
      }
      // 递归处理左右孩子节点，而只push当前root的值
      inorder(root.left);
      res.push(root.val);
      inorder(root.right);
  }
  inorder(root);
  return res;
};
