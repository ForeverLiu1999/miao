// 39-M-组和总和
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
// 回溯算法可以用于解决在树类中寻找可行解问题
const combinationSum = (candidates, target) => {
  // 存储结果
  const res = [];
  // 创建递归函数
  // start是当前选择的起点索引 temp是当前的集合 sum是当前求和
  const dfs = (start, temp, sum) => {
    if (sum >= target) { // 设置递归出口
      if (sum == target) {
        res.push(temp.slice()); // temp的拷贝 加入解集
      }
      return;   // 结束当前递归
    }
    for (let i = start; i < candidates.length; i++) { // 枚举当前可选的数，从start开始
      temp.push(candidates[i]);          // 选中这个数
      dfs(i, temp, sum + candidates[i]); // 基于此继续选择，传i，下一次就不会选到i左边的数，注意不要传i+1，否则会漏掉可重复使用的i
      temp.pop();   // 撤销选择，回到选择candidates[i]之前的状态，继续尝试选同层右边的数
    }
  };
  dfs(0, [], 0); // 最开始可选的数是从第0项开始的，传入一个空集合，sum也为0
  return res;
};

