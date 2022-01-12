/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
 var reorderList = function(head) {
  // 创建哑结点
  const dummy = new ListNode(0);
  dummy.next = head;
  // 创建快慢指针
  let slow = dummy;
  let quick = dummy;
  // 慢的走一步，快的走两步
  while (quick && quick.next) {
    slow = slow.next;
    quick = quick.next.next;
  }
  // 中点右边的链表为right
  let right = slow.next;
  slow.next = null;
  // 中点左边的链表为left
  let left = dummy.next;
  // 反转右链表
  right = reverseList(right);
  // 把左右两个链表的节点交错拼接到
  while (left && right) {
    // 保存防断
    let lNext = left.next;
    let rNext = right.next;
    // 各剪切出一个节点
    right.next = left.next;
    left.next = right;
    // 各剪切出一个节点然后复原
    left = lNext;
    right = rNext;
  }
  return dummy.next;
};

// 定义一个函数用来反转链表
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  while (curr !== null) {
      let nextTemp = curr.next;
      curr.next = prev;
      prev = curr;
      curr = nextTemp;
  }
  return prev;
}