/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */

// 每个节点放入数组，然后reverse
 var reversePrint = function(head) {
  let p = head;
  let arrayNums = [];
  while (p) {
    arrayNums.push(p.val);
    p = p.next;
  }
  let reNums = arrayNums.reverse();
  return reNums;
};

// 每个节点放入数组，但如果用unshift就不用reverse了捏
// 每个节点放入数组，然后reverse
var reversePrint = function(head) {
  let p = head;
  let arrayNums = [];
  while (p) {
    arrayNums.unshift(p.val);
    p = p.next;
  }
  return reNums;
};

// 使用栈存储
// 遍历链表从头到尾，但输出却是从尾到头，很容易想到递归和栈，这是栈的写法
var reversePrint = function (head) {
  // 创建栈
  let nodes = [];
  // 不为空就push进栈
  while (head != null) {
    nodes.push(head.val);
    head = head.next;
  }
  // 这行可以替代下边所有代码
  // return nodes.reverse();
  let result = [];
  let temp = nodes.pop();
  while (temp != null) {
    result.push(temp);
    temp = nodes.pop();
  };
  return result;
}

// 递归
// 遍历链表从头到尾，但输出却是从尾到头，很容易想到递归和栈，这是递归的写法
// 写法一
var reversePrint = function (head) {
  // 如果为空说明递归执行到了尽头，而且是从后往前拼的
  return head == null ? [] : reversePrint(head.next).concat(head.val);
}
