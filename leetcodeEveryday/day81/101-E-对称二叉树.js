// 101-E-对称二叉树
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

// 镜像对称
// root.val相等
// 左树节点的左子树与右树节点的右子树相同
const isSymmetric = (root) => {
  // 声明一个check函数用来判断左右子树是否满足对称各项条件
  const check = (left, right) => {
    // root存在而两个子树都为null，是对称的
    if (left == null && right == null) {
      return true;
    }
    // 两个子树都存在，则需要：root值相同，且他们的子树也满足镜像
    if (left && right) {
      return left.val == right.val && check(left.left, right.right) && check(left.right, right.left);
    }
    // 一个子树存在一个不存在，肯定不对称
    return false;
  }
  // 如果传入的root就是null，对称
  if (root == null) {
    return true;
  }
  // 否则，调用check函数
  return check(root.left, root.right);
};
const isSymmetric = (root) => {
  const check = (left, right) => {
    if (left == null && right == null) {
      return true;
    }
    if (left && right) {
      return left.val == right.val && check(left.left, right.right) && check (left.right, right.left);
    }
    return false;
  }
  if (root == null) {
    return true;
  }
  return check(root.left, root.right);
}