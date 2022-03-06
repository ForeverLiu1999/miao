// 257-E-二叉树的所有路径
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
 * @return {string[]}
 */
// 深度优先搜索遍历二叉树
var binaryTreePaths = function (root) {
  const paths = [];
  const construct_paths = (root, path) => {
    if (root) {
      path += root.val.toString();
      // 左右子节点都为空说明该节点是叶子节点
      if (root.left === null && root.right === null) {
        // 所以把路径加入paths中
        paths.push(path);
      } else {
        // 当前节点不是叶子结点时，就继续递归遍历
        path += "->";
        construct_paths(root.left, path);
        construct_paths(root.right, path);
      }
    }
  }
  construct_paths(root, "");
  return paths;
};
