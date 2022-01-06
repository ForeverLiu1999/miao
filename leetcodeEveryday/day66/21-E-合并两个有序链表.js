/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeTwoLists = function(list1, list2) {
  //  哑结点
  var dummy = new ListNode(0);
  var p = dummy;
  // while循环条件就是list1和list2不为空
  while (list1 && list2) {
    // 娇小的节点取出来连到p上
    if (list1.val < list2.val) {
      p.next = list1;
      list1 = list1.next;
    } else {
      p.next = list2;
      list2 = list2.next;
    }
    p = p.next;
  }
  // 如果循环结束说明有一个链表为空了，那就把不为空的链表连上去
  p.next = list1 || list2;
  return dummy.next;
};

// 递归写法
var mergeTwoLists = function (list1, list2) {
  // 递归结束限制
  if (!list1) {
    return list2;
  }
  if (!list2) {
    return list1;
  }
  // 取两个链表中头节点小的那个链表的头节点,作为新的头节点指向剩下两链表的合并结果
  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
}