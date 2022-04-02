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