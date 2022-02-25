// 455-E-分发饼干
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
  // 首先对恋歌数组排序
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);
  const numOfChildren = g.length, numOfCookies = s.length;
  let count = 0;
  // 对每个元素g[i]，找到未被使用的最小j使得g[i]<=s[j],则s[j]可以满足g[i],由于g和s已经排好序，所以整个过程只需要对两数组各遍历一次
  // 当其中一个数组遍历结束时，说明所有的孩子都被分配到了饼干，或者所有饼干都已经被分配或被尝试分配,可能存在无法分配给任何孩子的饼干
  // 此时被分配到饼干的孩子数量即为可以满足的最多数量
  for (let i = 0, j = 0; i < numOfChildren && j < numOfCookies; i++, j++) {
    while (j < numOfCookies && g[i] > s[j]) {
      j++;
    }
    if (j < numOfCookies) {
      count++;
    }
  }
  return count;
};