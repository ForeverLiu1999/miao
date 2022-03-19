// 40-M-组合总和 II
// 与39不同的地方是candidates中的每个数字在每次组合中只能使用一次，而且candidates中有重复数字

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function(candidates, target) {
  const res = []; path = [], len = candidates.length;
  candidates.sort();
  backtracking(0, 0);
  return res;
  function backtracking(sum, i) {
      if (sum > target) return;
      if (sum === target) {
          res.push(Array.from(path));
          return;
      }
      let f = -1;
      for(let j = i; j < len; j++) {
          const n = candidates[j];
          if(n > target - sum || n === f) continue;
          path.push(n);
          sum += n;
          f = n;
          backtracking(sum, j + 1);
          path.pop();
          sum -= n;
      }
  }
};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum2 = function (candidates, target) {
  //  先排序，使重复的元素相邻，容易去重
  candidates.sort((a, b) => a - b);
  let res = [];
  // 创建容器
  let visited = new Array(candidates.length).fill(false);
  /**
   *
   * @param {*} index 当前开始的索引
   * @param {*} path 回溯的路径
   * @param {*} sum 当前路径中所有元素的和
   */
  const backtrack = (index, path, sum) => {
    // 和已超目标值  不符合退出
    if (sum > target) return;
    // 找到目标和 将路径加入结果集中
    if (sum == target) return res.push(path.slice());
    for (let i = index; i < candidates.length; i++) {
      // 当前元素跟上一个元素相同，上一个元素没有选那当前元素也不能选，去重忽略同层重复项，避免产生重复的组合
      if (candidates[i - 1] == candidates[i] && !visited[i - 1]) continue;
      if (!visited[i]) {
        visited[i] = true;
        // 选择 candidates[i]
        path.push(candidates[i]);
        sum += candidates[i];
        // 递归遍历下一层回溯树 注意这里是i+1 因为同一个元素不能重复使用，当前选择的数字不能和下一次选择的数字重复，给下一层的子递归传i+1，避免与本次i重复
        backtrack(i + 1, path, sum);
        // 撤销选择 candidates[i]
        sum -= candidates[i];
        path.pop();
        visited[i] = false;
      }
    }
  };
  backtrack(0, [], 0);
  return res;
};
const backtrack = (index, path, sum) => {
  if (sum > target) return;
  if (sum == target) return res.push(path.slice());
}