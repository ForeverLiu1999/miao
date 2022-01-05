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

// https://leetcode-cn.com/problems/reverse-linked-list/solution/shi-pin-jiang-jie-die-dai-he-di-gui-hen-hswxy/

// 迭代解法
// curr.next = prev不断迭代向前移动可以直接反转,但如果直接修改curr.next，因为节点没有引用前一个节点，
// 所以我们需要用next存储curr.next
// 那就找不到下一个链表节点了也就无法迭代向前移动了，然后prev = curr，curr = next就能一直移动了
 var reverseList = function(head) {
  let prev = null;
  curr = head;
  while (curr) {
    const next = curr.next;
    curr.next = prev;
    // 移动窗口，当前变成过去，未来变成现在
    prev = curr;
    curr = next;
  }
  return prev;
};

var reverseList = function(head) {
  let prev = null;
  curr = head;
  while(curr) {
    const next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
}

// 递归解法
// 递归特征三点，1大问题拆成小问题，2子问题和父问题求解方式一样，3存在最小子问题
var reverseList = function (head) {
  // 递归终止条件
  if (head == null || head.next == null) {
    return head;
  }
  const p = reverseList(head.next);
  // 递归后反转
  head.next.next = head;
  head.next = null;
  return p;
}

var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var a = null;
  var b = null;
  var c = head;
  while (c) {
    a = b;
    b = c;
    c = c.next;
    b.next = a;
  }
  return b;
}


