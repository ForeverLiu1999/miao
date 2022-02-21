// 46-M-全排列
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
  const res = [];
  const used = {};
  function dfs (path) {
    if (path.length == nums.length) { // 个数选够了
      res.push(path.slice()); // 拷贝一份path,加入解集res
      return; // 结束当前递归分支
    }
    for (let num of nums) { // for枚举出每个可选的选项
      // if (path.includes(num)) continue; // 这样查找是O(n),增加了时间复杂度时间复杂度
      if (used[num]) continue; // 使用过的就跳过
      path.push(num); // 选择当前的数，加入path
      used[num] = true; // 记录为使用过的
      dfs(path); // 基于选了当前的数，递归
      path.pop(); // 上一句的递归结束，回溯，将最后选的数pop出来
      used[num] = false; // 撤销这个记录
    }
  }
  dfs([]); // 递归入口，空path穿进去
  return res;
};