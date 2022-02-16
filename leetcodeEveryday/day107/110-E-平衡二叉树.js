// 自顶向下暴力法
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
// 递归 后序遍历左右中 当前左右子树高度相差大于1返回-1
var isBalanced = function (root) {
  // 1 确认递归函数参数以及返回值
  const getDepth = function (node) {
    // 2 确定递归函数终止条件
    if (node === null) {
      return 0;
    }
    // 3 确认单层递归逻辑
    let leftDepth = getDepth(node.left); // 左子树高度
    if (leftDepth === -1) {
      return -1;
    }
    let rightDepth = getDepth(node.right); // 右子树高度
    if (rightDepth === -1) {
      return -1;
    }
    if (Math.abs(leftDepth - rightDepth) > 1) {
      return -1;
    } else {
      return 1 + Math.max(leftDepth, rightDepth);
    }
  }
  return getDepth(root) === -1 ? false : true;
};

// 自顶向下暴力法
// 自顶向下的比较每个节点的左右子树最大高度差，如果二叉树中每个节点的左右子树最大高度差小于等于1，
// 达到平衡二叉树要求时，此时则是平衡二叉树
var depth = function (node) {
  if (!node) return -1;
  return 1 + Math.max(depth(node.left), depth(node.right));
}
var isBalanced = function (root) {
  if (!root) return true;
  return Math.abs(depth(root.left) - depth(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
}

// 自底向上暴力法
// 利用后续遍历二叉树（左右根），从底至顶返回子树最大高度，判定每个子树是不是平衡树 ，
// 如果平衡，则使用它们的高度判断父节点是否平衡，并计算父节点的高度，如果不平衡，返回 -1 。
// 遍历比较二叉树每个节点 的左右子树深度：
// 比较左右子树的深度，若差值大于 1 则返回一个标记 -1 ，表示当前子树不平衡
// 左右子树有一个不是平衡的，或左右子树差值大于 1 ，则二叉树不平衡
// 若左右子树平衡，返回当前树的深度（左右子树的深度最大值 +1 ）
var isBalanced = function (root) {
  return balanced(root) !== -1
};
var balanced = function (node) {
  if (!node) return 0
  const left = balanced(node.left)
  const right = balanced(node.right)
  if (left === -1 || right === -1 || Math.abs(left - right) > 1) {
      return -1
  }
  return Math.max(left, right) + 1
}