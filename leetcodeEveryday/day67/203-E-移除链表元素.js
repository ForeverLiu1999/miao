/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

// 递归
// 链表本身很适合递归，首先对除了头节点head之外的头节点进行删除操作，然后判断head的节点值是否等于给定的val
var removeElements = function (head, val) {
  //  递归终止条件是head为空
  if (head === null) {
    return head;
  }
  // head不为空时递归地进行删除操作，因此删除操作后的头节点是head.next
  head.next = removeElements(head.next, val);
  // 判断head的节点值是否等于val，来决定是否删除head，如果head的节点值不等于val
  // 则head保留，所以删除操作后的头节点还是head
  return head.val === val ? head.next : head;
};

// 迭代
var removeElements = function (head, val) {
  // 由于链表的头节点head有可能会被删除，所以创建哑结点有便于操作
  const dummyHead = new ListNode(0);
  // 并有如下
  dummyHead.next = head;
  // 初始化temp，temp表示当前节点
  let temp = dummyHead;
  // 如果temp的下一个节点不为空且下一个节点的节点值等于给定的val
  while (temp.next !== null) {
    if (temp.next.val == val) {
      // 则需要删除下一个节点
      temp.next = temp.next.next;
      // 而如果temp的下一个节点的值不等于给定的val，则保留下一个节点，将temp移动到下一个节点
    } else {
      temp = temp.next;
    }
  }
  // 最后返回新的头节点
  return dummyHead.next;
};

// 由于链表的头节点head有可能会被删除，所以创建哑结点有便于操作
// 并有如下
// 初始化temp，temp表示当前节点
// 如果temp的下一个节点不为空且下一个节点的节点值等于给定的val
// 则需要删除下一个节点
// 而如果temp的下一个节点的值不等于给定的val，则保留下一个节点，将temp移动到下一个节点
// 最后返回新的头节点
var removeElements = function (head, val) {
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let temp = dummyHead;
  while(temp.next !== null) {
    if (temp.next.val === val) {
      temp.next = temp.next.next;
    } else if (temp.next.val !== val) {
      temp = temp.next;
    }
  }
  return dummyHead.next;
}