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

// 数组存储找中间元素
 var middleNode = function(head) {
  // 指针p指向链表头节点
  let p = [head];
  // 当下一个节点不为空(没遍历到链表尾)时，把当前节点push到数组中，然后下一位
  while (p[p.length - 1].next != null) {
    p.push(p[p.length - 1].next);
  }
  // 返回数组p的中间元素，如果偶数个就第二个
  return p[Math.trunc(p.length / 2)];
};