// 剑指 Offer 25-E-合并两个排序的链表
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 优雅递归老绅士伦敦腔May I help you sir?
 var mergeTwoLists = function(l1, l2) {
   debugger;
  if (!l1) return l2;
  if (!l2) return l1;
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l1, l2.next);
    return l2;
  }
};

// 迭代解法好理解
var mergeTwoLists = function (l1, l2) {
  // 创建一个新的结点，后续排序的结点往这个上拼接
  let current = new ListNode();
  // 设置哑结点
  const dummy = current;
  // l1和l2但凡有一个结点存在就可以执行
  while (l1 || l2) {
    // 如果l1拼没了就接上l2
    if (!l1) {
      current.next = l2;
      return dummy.next;
      // 反之如果l2拼没了就接上l1
    } else if (!l2) {
      current.next = l1;
      return dummy.next;
    }
    // 比较l1结点和l2结点的值，先拼小的后拼大的
  if (l1.val <= l2.val) {
    current.next = l1;
    l1 = l1.next;
  } else {
    current.next = l2;
    l2 = l2.next;
  }
  // current++
  current = current.next;
}
// 返回哑结点的next
return dummy.next;
}


// 迭代解法好理解注意返回值
var mergeTwoLists = function (l1, l2) {
  // 创建一个新的结点，后续排序的结点往这个上拼接
  let current = new ListNode();
  // 设置哑结点
  const dummy = current;
    if (!l1 && !l2) {
  return null;
}
  // l1和l2但凡有一个结点存在就可以执行
  while (l1 || l2) {
    // 如果l1拼没了就接上l2
    if (!l1) {
      current.next = l2;
      return dummy.next;
      // 反之如果l2拼没了就接上l1
    } else if (!l2) {
      current.next = l1;
      return dummy.next;
    }
    // 比较l1结点和l2结点的值，先拼小的后拼大的
  if (l1.val <= l2.val) {
    current.next = l1;
    l1 = l1.next;
  } else {
    current.next = l2;
    l2 = l2.next;
  }
  // current++
  current = current.next;
}
}