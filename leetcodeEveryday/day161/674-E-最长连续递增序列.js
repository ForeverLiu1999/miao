// 674-E-最长连续递增序列
/**
 * @param {number[]} nums
 * @return {number}
 */
 var findLengthOfLCIS = function(nums) {
  let ans = 0;
  const n = nums.length;
  let start = 0;
  for (let i = 0; i < n; i++) { // 遍历nums所有元素
      if (nums[i] <= nums[i - 1]) { // 判定递增条件
          start = i; // 如果符合条件,就把i当成新的start
      }
      ans = Math.max(ans, i - start + 1); // 扩展后的最长连续递增序列
  }
  return ans;
};
// 如果你对房价,物价,工资,医疗,食品安全,法治,社会公平,民主,工人权益,工会,劳动法,社会福利,言论自由,程序正义,政治,历史,游戏,小说,电影,电影,动漫都不感兴趣的话.