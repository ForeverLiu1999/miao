// 1046-E-最后一块石头的重量
/**
 * @param {number[]} stones
 * @return {number}
 */
// 最大堆
 var lastStoneWeight = function(stones) {
  //  创建堆
  const pq = new MaxPriorityQueue();
  // 遍历stones压入pq中
  for (const stone of stones) {
    pq.enqueue('x', stone);
  }
  // 直到剩下石头少于两块
  while (pq.size() > 1) {
    // a、b分别是第一重、第二重的石头
    const a = pq.dequeue()['priority'];
    const b = pq.dequeue()['priority'];
    // 如果a > b就把 a - b的值放入堆中
    if (a > b) {
      pq.enqueue('x', a - b);
    }
  }
  // 不为空就是只剩一块石头,返回他
  return pq.isEmpty() ? 0 : pq.dequeue()['priority'];
};

// 递归
var lastStoneWeight = function (stones) {
// 升序排列
  stones.sort((a, b) => a - b);
  // 递归直至边界数组长度 <= 1
  if (stones.length > 1) {
    // 最重和次重的差
    const d = stones.pop() - stones.pop();
    // 如果差d存在,就把它重新push回stones
    if (d) stones.push(d);
    // 开始递归
    return lastStoneWeight(stones);
  }
  // 如果不为空就只剩一块石头,返回它
  return stones.length ? stones[0] : 0;
}