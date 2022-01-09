/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
 var reverseBetween = function(head, left, right) {
  // 因为头节点可能被波及，所以使用dummy哑结点以防万一
  const dummyNode = new ListNode(-1);
  dummyNode.next = head;
  let prev = dummyNode;
  // 第一步，让prev走到left节点的前一个节点，需要走left-1步
  for (let i = 0; i < left - 1; i++) {
    prev = prev.next;
  }
  // 第二步，从prev走到right节点，需要走right-left-1步
  let rightNode = prev;
  for (let i = 0; i < right - left + 1; i++) {
    rightNode = rightNode.next;
  }
  // 第三步，把left到right切断出来,head为leftNode
  let leftNode = prev.next;
  let curr = rightNode.next;
  prev.next = null;
  rightNode.next = null;
  // 第四步，反转切断出来的链表
  reverseList(leftNode);
  // 第五步，拼接回到原链表上
  prev.next = rightNode;
  leftNode.next = curr;
  return dummyNode.next;
};
// 反转链表函数
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
