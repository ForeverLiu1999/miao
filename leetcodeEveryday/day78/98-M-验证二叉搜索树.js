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

//  有效 二叉搜索树定义如下：
//  节点的左子树只包含 小于 当前节点的数。
//  节点的右子树只包含 大于 当前节点的数。
//  所有左子树和右子树自身必须也是二叉搜索树。
// 所以中序遍历一定是升序序列
 var isValidBST = function(root) {
   let stack = [];
  // 比小用负无穷
   let inorder = -Infinity;
  // 循环直到stack为空或!root(所有节点都经历过循环)
  while (stack.length || root) {
    // 一直找当前root的左孩子
    while (root) {
      stack.push(root);
      root = root.left;
    }
    // 最后一个左孩子
    root = stack.pop();
    // 如果中序遍历得到的节点值小于等于前一个inorder，说明不是二叉搜索树
    if (root.val <= inorder) {
      return false;
    }
    // 如果到目前为止是二叉搜索树，就把root.val给inorder然后看有没有右孩子
    inorder = root.val;
    root = root.right;
  }
  return true;
};