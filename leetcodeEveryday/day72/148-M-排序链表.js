/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

// 简单粗暴地拆成数组再拼起来
 var sortList = function(head) {
  // 特殊情况
  if (!head) {
    return null;
  }
  let nums = [];
  while (head) {
    // t保存防提前断失联
    let t = head.next;
    // 现在断
    head.next = null;
    // 统统push进nums
    nums.push(head);
    // 现在拼上用于下次切断再push
    head = t;
  }
  // 排好
  nums.sort((a, b) => (a.val - b.val));
  // 拼成链表
  for (let i = 0; i < nums.length - 1; i++) {
    nums[i].next = nums[i + 1];
  }
  // 返回头
  return nums[0];
};