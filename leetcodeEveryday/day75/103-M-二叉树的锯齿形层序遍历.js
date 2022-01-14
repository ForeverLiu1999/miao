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
 * @return {number[][]}
 */
 const levelOrderBottom = (root) => {
  if (!root) {
    return [];
  }
  // 创建队列，层序遍历时，队列很好用
  const queue = [];
  // 把根push进来
  queue.push(root);
  // 创建一维数组
  const res = [];
  while (queue.length) {
    // 创建二维数组
    const subRes = [];
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i++) {
      // 按照队列顺序弹出
      const cur = queue.shift();
      // 二维数组内push值
      subRes.push(cur.val);
      // 如果存在node的左右孩子就push进去
      if (cur.left) {
        queue.push(cur.left);
      }
      if (cur.right) {
        queue.push(cur.right);
      }
    }
    res.unshift(subRes);
  }
  return res;
}