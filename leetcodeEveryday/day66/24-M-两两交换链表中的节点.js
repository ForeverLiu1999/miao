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
 var swapPairs = function(head) {
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


