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
 * @return {string}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */

// 递归
var tree2str = function (t) {
  if (!t) return '';
  // 转化为字符串
  let str = t.val.toString();
  // 左子树不为空
  if (t.left) {
    str = str + '(' + tree2str(t.left) + ')';
  }
  // 右子树不空
  if (t.right) {
    // 左子树为空右子树不空时，左子树的括号对不能省略，无左孩子，而只有右孩子，就加一层括号表示左孩子存在
    if (!t.left) {
      str += '()';
    }
    // 再对右孩子递归，并套一层外层括号
    str = str + '(' + tree2str(t.right) + ')';
  }
  // 没有孩子就不加括号
  return str;
};