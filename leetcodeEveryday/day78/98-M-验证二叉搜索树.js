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

// 递归解法
const helper = (root, lower, upper) => {
  // 根节点存在
  if (!root) {
      return true;
  }
  // 判断所有节点在(lower,upper)范围内，不满足直接返回false
  if (root.val <= lower || root.val >= upper) {
      return false;
  }
  // 否则就继续递归判断当前root的左右子树，全满足才说明是
  // 而递归电泳右子树时，需要把下界lower改为root.val，即调用helper(root.right, root.val, upper)
  return helper(root.left, lower, root.val) && helper(root.right, root.val, upper);
}
var isValidBST = function(root) {
  // 递归调用入口，上下界均为极限值
  return helper(root, -Infinity, Infinity);
};