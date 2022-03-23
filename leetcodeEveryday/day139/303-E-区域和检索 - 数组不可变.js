// 303-E-区域和检索 - 数组不可变
/**
 * @param {number[]} nums
 */
 var NumArray = function(nums) {
  const n = nums.length;
  const sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
    this.sums[i + 1] = this.nums[i] + nums[i];
  }
};
/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
  return this.sums[right + 1] - this.sums[left];
};
/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */

// -----------------------------------------------------------------------------
var NumArray = function(nums) {
  const n = nums.length;
  this.sums = new Array(n + 1).fill(0);
  for (let i = 0; i < n; i++) {
      this.sums[i + 1] = this.sums[i] + nums[i];
  }
};

NumArray.prototype.sumRange = function(i, j) {
  return this.sums[j + 1] - this.sums[i];
};

// 我非常不认同合法挖坟合理挖坟理智挖坟这种说法，我是一个坚信程序正义的人。
// 我举个经典例子刑讯逼供，比如说有些人认为，有些坏人做了坏事大家也都知道他是坏人可没有确凿的证据，那我们就应该刑讯逼供对付坏人，这种想法是好的，
// 但现实落实的时候就是会创造一大批冤假错案出来，因为刑讯逼供本身就是程序不正义的，把所有支持刑讯逼供的人抓进去大刑伺候，用了多久让他们承认自己杀了戚家十三口还强奸了一头母猪都没问题，用中二一点的话来说，就是你无法用不正义手段达成正义目的。
// 关于刑讯逼供这个问题，知乎B站很多都讨论过了，罗翔老师也说过，我就不再多说了。
// 挖坟这个问题也有类似的意义，不应该无边界地追溯一个人的言论，这种手段就是有问题的，没有合法挖坟合理挖坟理智挖坟这种说法！这样只会创造一个人人自危的环境，一个言论极度不自由的环境，毕竟谁知道你今天说的话明天会不会错？
// 我小时候政府还在宣传什么八荣八耻，学习雷锋好榜样，今天就宣传绿水青山就是金山银山了，学习习总书记知青岁月了，你总不能把之前的挖出来鞭尸吧，一朝天子一朝臣，挖坟实在是可怕又可笑。