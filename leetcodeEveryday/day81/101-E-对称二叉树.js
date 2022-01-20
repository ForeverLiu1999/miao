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

const isSymmetric = (root) => {
  if (root == null) return true;

  const queue = [];
  queue.push(root.left, root.right);  // 起初入列两个子树

  while (queue.length) {  // 队列清空就结束，没有节点可入列了
    const levelSize = queue.length; // 当前层的节点个数
    for (let i = 0; i < levelSize; i += 2) { // 当前层的节点成对出列
      const left = queue.shift();
      const right = queue.shift();  // 出列一对节点
      if ((left && right == null) || (left == null && right)) { // 一个存在 一个不存在
        return false;
      }
      if (left && right) { // 两个都存在
        if (left.val != right.val) { // 节点值不同，不对称
          return false;
        }
        queue.push(left.left, right.right); // 推入下一层的一对节点
        queue.push(left.right, right.left); // 推入下一层的一对节点
      }
    }
  }
  return true; // bfs结束，始终没有返回false，则返回真
};

// 维护队列，如果根节点存在，左右子树入列
// 每次出列一对节点，检查他们是否对称
// 不对称情况包括，一个null另一个不为null 都存在但root.val不同
const isSymmetric = (root) => {
  if (root == null) return true;
  const queue = [];
  queue.push(root.left, root.right);  // 起初入列两个子树
  while (queue.length) {  // 队列清空就结束，没有节点可入列了
    const levelSize = queue.length; // 当前层的节点个数
    for (let i = 0; i < levelSize; i += 2) { // 当前层的节点成对出列
      const left = queue.shift();
      const right = queue.shift();  // 出列一对节点
      if ((left && right == null) || (left == null && right)) { // 一个存在 一个不存在
        return false;
      }
      if (left && right) { // 两个都存在
        if (left.val != right.val) { // 节点值不同，不对称
          return false;
        }
        queue.push(left.left, right.right); // 推入下一层的一对节点
        queue.push(left.right, right.left); // 推入下一层的一对节点
      }
    }
  }
  return true; // bfs结束，始终没有返回false，则返回真
};
const isSymmetric = (root) => {
  if (root == null) return true;
  const queue = [];
  queue.push(root.left, root.right);
  while (queue.length) {
    const levelSize = queue.length;
    for (let i = 0; i < levelSize; i += 2) {
      const left = queue.shift();
      const right = queue.shift();
      if ((left && right == null) || (left == null && right)) {
        return false;
      }
      if (left && right) {
        if (left.val != right.val) {
          return false;
        }
        queue.push(left.left, right.right);
        queue.push(left.right, right.left);
      }
    }
  }
  return true;
}

// 递归解法
// 第一步 确认递归函数的参数和返回值
// 第二步 确认终止条件
// 第三步 单层递归的逻辑
var isSymmetric = function(root) {
  //使用递归遍历左右子树 递归三部曲
  // 1. 确定递归的参数 root.left root.right和返回值true false
  const compareNode=function(left,right){
      //2. 确定终止条件 空的情况
      if(left===null&&right!==null||left!==null&&right===null){
          return false;
      }else if(left===null&&right===null){
          return true;
      }else if(left.val!==right.val){
          return false;
      }
      //3. 确定单层递归逻辑
      let outSide=compareNode(left.left,right.right);
      let inSide=compareNode(left.right,right.left);
      return outSide&&inSide;
  }
  if(root===null){
      return true;
  }
  return compareNode(root.left,root.right);
};