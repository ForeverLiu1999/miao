/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let addOne = 0;
  // 创建一个头链表用于保存结果
  let sum = new ListNode("0");
  // 保存头链表的位置用于最后的链表返回
  let head = sum;
  // 在两个链表之中有一个存在的前提下执行下面的逻辑
  while (addOne || l1 || l2) {
    let val1 = l1 !== null ? l1.val: 0;
    let val2 = l2 !== null ? l2.val: 0;
    let r1 = val1 + val2 + addOne;
    addOne = r1 >= 10 ? 1 : 0;
    // sum的下一个节点,如果计算结果大于10则取余
    sum.next = new ListNode(r1 % 10);
    // sum指向下一个节点
    sum = sum.next;
    // l1指向下一个节点，以便计算第二个节点的值
    if (l1) l1 = l1.next;
    // l2指向下一个节点，以便计算第二个节点的值
    if (l2) l2 = l2.next;
  }
  // 返回计算结果,因为head中保存的第一个节点是最开始定义的0，所以用head.next
  return head.next;
};