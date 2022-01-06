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

// 递归解法
// 123456变成214365
// 原来1->2->3->4->5->6
// 现在2->1->4->3->6->3
// 拆成1 2 3456
// 让2指向1,1指向后续链表
// 返回第二个节点，开始递归
 var swapPairs = function(head) {
  // 0个节点或者1个节点直接返回head
  if (!head || !head.next) {
    return head;
  }
  var a = head;
  var b = head.next;
  var c = head.next.next;
  b.next = a;
  a.next = swapPairs(c);
  return b;
};

// 遍历 把1->2->3->4变成2->1->4->3
// dummy 1 2 3
//   a   b c
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var dummy = new ListNode(0, head);
  var a = dummy;
  var b = head;
  var c = head.next;
  while (c) {
    // 1->3,1->2删除
    b.next = c.next;
    // 然后2->1
    c.next = b;
    // dummy->2
    a.next = c;

    a = b;
    b = b.next;
    c = b?.next;
  }
  return dummy.next;
}

var swapPairs = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var dummy = new ListNode(0, head);
  var a = dummy;
  var b = head;
  var c = head.next;
  while (c) {
    b.next = c.next;
    c.next = b;
    a.next = c;

    a = b;
    b = b.next;
    if (b == null) {
      break;
    }
    c = b.next;
  }
  return dummy.next;
}


