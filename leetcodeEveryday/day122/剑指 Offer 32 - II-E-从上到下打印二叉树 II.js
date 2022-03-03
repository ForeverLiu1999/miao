// 剑指 Offer 32 - II-E-从上到下打印二叉树 II
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  if (!root) return [];
  const queue = [root];
  const res = []; // 存放遍历结果
  let level = 0; // 代表当前层数
  while (queue.length) {
    res[level] = []; // 第level层的遍历结果
    let levelNum = queue.length; // 第level层的节点数量
    // 如果该层还有长度存在
    while (levelNum--) {
      const front = queue.shift();
      res[level].push(front.val);
      // 如果左右子结点存在的话就push进queue
      if (front.left) queue.push(front.left);
      if (front.right) queue.push(front.right);
    }
    // 本层结束下一层
    level++;
  }
  return res;
};