// offer 57 -E- II. 和为s的连续正数序列
// 滑动窗口
// 没有参考物数组，但是可以根据下标
/**
 * @param {number} target
 * @return {number[][]}
 */
var findContinuousSequence = function(target) {
  let l=1
  let r=2
  let sum = 3
  let res=[]
  // 滑动窗口框架
  while(l<r){
      if(sum===target){
          let ans =[]
          for(let k=l;k<=r;k++){
              ans[k-l]=k
          }
          res.push(ans)
          // 等于的情况 我们可以继续窗口往右搜索 同时缩小左边的
           sum=sum-l
           l++
      } else if(sum>target){
          // 大于的条件 缩小窗口 sum已经加过了
          sum=sum-l
          l++
      } else {
          // 小于的情况 滑动窗口继续扩大
          r++
          sum=sum+r
      }
  }
  return res
};

// 先把数分解9=1+8=2+7=3+6=4+5,按这种，找到可能组成正确结果的数组，
// 根据数的结构，易知结果可能存在[1,2,3,4,5]中，不难发现数组最后一个数,
// 如果target是偶数就是target/2,如果是奇数就是target/2取整加一，
// 即Math.floor(target/2)+1 或采用二进制取整(target/2 | 0) + 1,再对找到的数组采用滑动窗口模型，
// 找出答案
var findContinuousSequence = function (target) {
  let index = target % 2 === 0 ? target / 2 : (target / 2 | 0) + 1
  let res = []
  let temp = []
  let sum = 0
  for (let i = 1; i <= index; i++) {
    temp.push(i)
    sum = sum + i
    while (sum > target) {
      sum -= temp[0]
      temp.shift()
    }
    if (sum === target) {
      temp.length >= 2 && res.push([...temp])
    }
  }
  return res;
};