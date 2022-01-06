/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

// 双指针
// 添加哑节点就可以不用去单独对头结点进行特殊的判断了
// 所以从哑结点开始遍历到L-N+1时,下一个节点就是需要删除的节点
 var removeNthFromEnd = function(head, n) {
  let dummy = new ListNode();
  dummy.next = head;
  let slow = dummy;
  let fast = dummy;
  // fast移动n+1次
  for (let i = 0; i <= n; i++) {
    fast = fast.next;
  }
  // 同时移动slow,fast
  while (fast !== null) {
    slow = slow.next;
    fast = fast.next;
  }
  // 删除元素
  slow.next = slow.next.next;
  return dummy.next;
};

// 两种暴力数组
// 第一种
// 转换为纯数组，删除倒数第N个数，再转成链表
var removeNthFromEnd = function (head, n) {
  let newArr = [];
  let dummy = new ListNode();
  let newList = dummy;
  while (head) {
    newArr.push(head.val);
    head = head.next;
  }
  newArr.splice (newArr.length - n, 1);
  for (let i = 0; i < newArr.length; i++) {
    newList.next = new ListNode(newArr[i]);
    newList = newList.next;
  }
  return dummy.next;
}

// 两种暴力数组
// 第二种
// 将链表存入数组，此次存放的是节点依次的头节点
// 将数组倒数第N个元素中的前后节点相连就删除掉了这个节点
var removeNthFromEnd = function (head, n) {
  // 哑结点基本操作
  const dummy = new ListNode(0, head);
  const newArr = new Array();
  let pushList = dummy;
  while (pushList != null) {
    newArr.push(pushList);
    pushList = pushList.next;
  }
  // 可以补充n = newArr.length的情况,直接返回head.next
  newArr[newArr.length - n - 1].next = newArr[newArr.length - n - 1].next.next;
  return dummy.next;
}

// 栈
// 将链表依次存入stack栈，再将栈后N个元素弹出，暴露出链表倒数第N个数的前一个节点，将其与倒数第N个数的后一个节点相连
var removeNthFromEnd = function (head, n) {
  const dummy = new ListNode(0, head);
  const stack = new Array();
  let pushList = dummy;
  while (pushList != null) {
    stack.push(pushList);
    pushList = pushList.next;
  }
  for (let i = 0; i < n; i++) {
    stack.pop();
  }
  let peek = stack[stack.length - 1];
  peek.next = peek.next.next;
  return dummy.next;
}

var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
}

