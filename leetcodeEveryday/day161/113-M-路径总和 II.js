// 113-M-路径总和 II
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
 * @param {number} targetSum
 * @return {number[][]}
 */
// 递归
// 需要遍历整个树找到所有路径,所以递归函数不需要返回值
 var pathSum = (root, targetsum) => {
  const res = [];
  const travelsal = (node, cnt, path) => {
    // 遇到了叶子节点且找到了和为sum的路径
    if (cnt === 0 && !node.left && !node.right) {
      res.push(path);
      return;
    }
    if (!node.left && !node.right) return; // 遇到叶子节点而没有找到合适的边,就排除掉,直接返回
    // 左,空节点不遍历
    if (node.left) {
      path.push(node.left.val);
      travelsal(node.left, cnt - node.left.val, path); // 递归
      path.pop(); // 回溯
    }
    if (node.right) {
      path.push(node.right.val);
      travelsal(node.right, cnt - node.right.val, path); // 递归
      path.pop(); // 回溯
    }
    return; // 无返回值
  };
  if (!root) return res;
  travelsal(root, targetsum - root.val, [root.val]); // 把根节点放进路径
  return res;
};

var pathSum = (root, targetsum) => {
  const res = [];
  const travelsal = (node, cnt, path) => {
    if (cnt === 0 && !node.left && !node.right) {
      res.push([...path]);
      return;
    }
    if (!node.left && !node.right) return;
    if (node.left) {
      path.push(node.left.val);
      travelsal(node.left, cnt - node.left.val, path);
      path.pop();
    }
    if (node.right) {
      path.push(node.right.val);
      travelsal(node.right, cnt - node.right.val, path);
      path.pop();
    }
    return;
  };
  if (!root) return res;
  travelsal(root, targetsum - root.val, [root.val]);
  return res;
}