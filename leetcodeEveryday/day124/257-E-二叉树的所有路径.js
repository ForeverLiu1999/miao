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

var binaryTreePaths = function (root) {
  const paths = [];
  const construct_paths = (root, path) => {
    if (root) {
      path += root.val.toString();
      if (root.left === null && root.right === null) {
        paths.push(path);
      } else {
        path += "->";
        construct_paths(root.left, path);
        construct_paths(root.right, path);
      }
    }
  }
  construct_paths(root, "");
  return paths;
}

// 广度优先搜索遍历二叉树
var binaryTreePaths = function (root) {
  // 创建一个队列存储节点以及该根节点的路径
  const paths = [];
  if (root === null) {
    return paths;
  }
  // 先只push进一个根节点
  const node_queue = [root];
  const path_queue = [root.val.toString()];
  // 当队列为空时广度优先搜索结束
  while (node_queue.length) {
    const node = node_queue.shift();
    const path = path_queue.shift();
      // 在每一步迭代中，取出队列首节点，如果是叶子节点，则将其对应的路径加入到答案中
    if (node.left === null && node.right === null) {
      paths.push(path);
      // 而如果他不是叶子节点，则将他所有孩子节点加入到队列的末尾
    } else {
      // 分别讨论左孩子节点为空和有孩子节点为空的情况
      if (node.left !== null) {
        node_queue.push(node.left);
        path_queue.push(path + "->" + node.left.val.toString());
      }
      if (node.right !== null) {
        node_queue.push(node.right);
        path_queue.push(path + "->" + node.right.val.toString());
      }
    }
  }
  return paths;
}
