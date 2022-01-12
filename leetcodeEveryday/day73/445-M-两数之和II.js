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

// 把两个链表的节点都push进栈，然后弹出相加，用一个变量记录进位
var addTwoNumbers = function (l1, l2) {
  // 创建两个容器数组和最后记录结果的数组
  const stack1 = [];
  const stack2 = [];
  const stack = [];
  // 创建两个指针分别指向l1和l2，还有一个curried记录进位
  let cur1 = l1;
  let cur2 = l2;
  let curried = 0;
  // 把链表l1的所有节点push进stack1
  while (cur1) {
    stack1.push(cur1.val);
    cur1 = cur1.next;
  }
  // 把链表l2的所有节点push进stack2
  while (cur2) {
    stack2.push(cur2.val);
    cur2 = cur2.next;
  }
  let a = null;
  let b = null;
  // 把stack12全都榨干，直到长度都为0
  while (stack1.length > 0 || stack2.length > 0) {
    a = Number(stack1.pop()) || 0;
    b = Number(stack2.pop()) || 0;
    // 当前位计算结果push进stack
    stack.push((a + b + curried) % 10);
    // 进位
    if (a + b + curried >= 10) {
      curried = 1;
      // 不进位
    } else {
      curried = 0;
    }
  }
  // 如果最后还有进位就push 1
  if (curried === 1) {
    stack.push(1);
  }

  const dummy = {};
  // 用current存起来，否则while循环结束是return出来的dummy.next为null
  let current = dummy;
  // 把结果输出
  while (stack.length > 0) {
    current.next = {
      val: stack.pop(),
      next: null
    };
    current = current.next;
  }
  return dummy.next;
};