// 剑指 Offer 54-E-二叉搜索树的第k大节点
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */

// 解法一 递归处理放进数组 然后sort一下找第k大的节点
// 解法一 递归处理放进数组 然后sort一下找第k大的节点
 var kthLargest = function(root, k) {
  // 创建一个set
  let setArray = new Set();
  // 创建递归dfs函数
  const dfs = function (node) {
    if (node === null) {
      return;
    }
    setArray.add(node.val);
    dfs(node.left);
    dfs(node.right);
  }
  // 递归入口
  dfs(root);
  // 转化为数组
  let array = [...setArray];
  // 无情粗暴排序
  array.sort((a, b) => {
    return b - a;
  })
  return array[k - 1];
};

// 解法二 二叉搜索树的中序遍历是排好序的，所以反中序遍历然后k-1
var kthLargest = function (root, k) {
  let setArray = [];
  const dfs = function (node) {
    if (node === null) {
      return;
    }
    dfs(node.right);
    setArray.push(node.val);
    dfs(node.left);
  }
  dfs(root);
  return setArray[k - 1];
}

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
 const levelOrder = (root) => {
  // 狗不理
  if (!root) {
    return [];
  }

  // 1. 设置结果集
  const result = [];

  // 2. 设置当前层
  let nowRoot = [root];

  // 3. 广度优先搜索（BFS）
  while (nowRoot.length) {
    // 3.1 设置下一层
    const nextRoot = [];

    // 3.2 设置当前层的值
    const nowResult = [];

    // 3.3 遍历当前层，取值以及添加下一层
    for (let i = 0; i < nowRoot.length; i++) {
      // 3.3.1 添加值
      nowResult.push(nowRoot[i].val);

      // 3.3.2 如果存在左子树
      if (nowRoot[i].left) {
        nextRoot.push(nowRoot[i].left);
      }

      // 3.3.3 如果存在右子树
      if (nowRoot[i].right) {
        nextRoot.push(nowRoot[i].right);
      }
    }

    // 3.4 收集完毕，开始交接
    nowRoot = nextRoot;
    result.push(nowResult);
  }

  // 4. 返回结果
  return result;
};

const root = {
  val: 3,
  left: { val: 9, left: null, right: null },
  right: {
    val: 20,
    left: { val: 15, left: null, right: null },
    right: { val: 7, left: null, right: null },
  },
};

console.log(levelOrder(root));