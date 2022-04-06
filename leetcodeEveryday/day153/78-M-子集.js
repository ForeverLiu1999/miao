// 78-M-子集
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// 回溯算法
//  https://leetcode-cn.com/problems/subsets/solution/shou-hua-tu-jie-zi-ji-hui-su-fa-xiang-jie-wei-yun-/
var subsets = nums => {
  const res = [];
  const dfs = (index, list) => {
    if (index == nums.length) { // 指针越界
      res.push(list.slice()); // 加入解集
      return; // 结束当前的递归
    }
    list.push(nums[index]); // 把这个数push进list
    dfs(index + 1, list); // 选这个数,索引加一,进行下一层递归,检查下一个数
    list.pop(); // 递归结束,撤销本层返回上一层
    dfs(index + 1, list); // 不选这个数,索引加一,进行下一层递归,检查下一个数
  };
  // 递归入口,索引0,空容器
  dfs(0, []);
  return res;
};

var subsets = nums => {
  const res = [];
  const dfs = (index, list) => {
    if (index == nums.length) {
      res.push(list.slice());
      return;
    }
    list.push(nums[index]);
    dfs(index + 1, list);
    list.pop();
    dfs(index + 1, list);
  };
  dfs(0, []);
  return res;
}