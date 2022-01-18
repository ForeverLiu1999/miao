// 701-M-二叉搜索树中的插入操作
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
 * @param {number} val
 * @return {TreeNode}
 */
// 二叉搜索树性质
// 左子树所有节点的值小于根节点
// 右子树所有节点的值大于根节点
// 所以当val插入时，根据两者大小就知道要插入的是左子树还是右子树
// 如果该子树不为空，则问题变成将val插入对应子树
var insertIntoBST = function (root, val) {
  if (root === null) {
    return new TreeNode(val);
  }
  let pos = root;
  while (pos !== null) {
    // 当确认要进行插入操作时，通过判断val和pos.val的大小来判断插入左还是右，此处是插入左子树
    if (val < pos.val) {
      // 若左子树为空，创建一个以val为值得节点，并链接到其父节点root上，若子树不为空，则将val插入对应子树
      if (pos.left === null) {
        pos.left = new TreeNode(val);
        break;
      } else {
        pos = pos.left;
      }
      // 此处是插入右子树
    } else {
      if (pos.right === null) {
        pos.right = new TreeNode(val);
        break;
      } else {
        pos = pos.right;
      }
    }
  }
  return root;
};