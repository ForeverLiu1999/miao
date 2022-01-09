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
// 时间复杂度O(N)
// 空间复杂度O(N)
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

// 单指针法
// 遍历两次链表第一次统计总共N个，第二次N/2那个则为中点
// 时间复杂度O(N)
// 空间复杂度O(1)
var middleNode = function (head) {
  n = 0;
  cur = head;
  // 第一次遍历，n用来计数
  while (cur != null) {
    ++n;
    cur = cur.next;
  }
  k = 0;
  cur = head;
  // 第二次比那里就只遍历一半
  while (k < Math.trunc(n / 2)) {
    ++k;
    cur = cur.next;
  }
  return cur;
}