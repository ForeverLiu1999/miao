/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// 使用额外空间
// 创建一个数组用来存放所有出现过的节点，然后遍历链表，直到出现之前出现过的节点
 var hasCycle = function(head) {
  var seen = [];
  var p = head;
  while (p) {
    if (seen.includes(p)) {
      return true;
    }
    seen.push(p);
    p = p.next;
  }
  return false;
};

// 不使用额外空间
var hasCycle = function (head) {
  if (!head) {
    return false;
  }
  var p = head;
  var q = head;
  // 如果不加q，q为空时，q.next会报错
  while (p && q && q.next) {
    // p为慢指针
    p = p.next;
    // q为快指针
    q = q.next.next;
    // 如果快慢指针相等
    if (p == q) {
      return true;
    }
  }
  return false;
}