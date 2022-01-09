/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
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

// 创建数组反转
var reverseList = function (head) {
  // 当链表长度为0或1时不需要操作
  // 注意这两个不能反着写，否则会报错，因为这是一个短路运算如果!head为null就不执行后边了，
  // 而如果执行后边说明!head为false,说明head为true，也就是head不为空，所以此时!head.next不会报错
  // 如果反着写就不行,在head不为null时，执行!head.next没问题，但head为null时就不行，因为无法判断空值的next
  if (!head || !head.next) {
    return head;
  }
  // 创建nodes数组用来存放链表中所有节点
  var nodes = [];
  // 当这个循环结束后，nodes数组中就包含了链表所有的节点
  while (head) {
    nodes.push(head);
    head = head.next;
  }
  // 将nodes数组倒序排列
  nodes.reverse();
  // 然后从第一个节点开始遍历
  for (var i = 0; i < nodes.length - 1; i++) {
    // 重新连起来
    // 写法一1
    nodes[i].next = nodes[i + 1];
    // 写法二 与写法一12不可同时存在
    // nodes[i].next = nodes[i + 1] ?? null;
  }
  // 写法一2
  nodes[i].next = null;
  return nodes[0];
}

// 不创建额外数组，用指针花里胡哨一顿操作
var reverseList = function (head) {
  // 基本操作同上
  if (!head || !head.next) {
    return head;
  }
  var a = null;
  var b = null;
  var c = head;
  // 基本代码
  // c不为空就可以继续走
  while (c) {
    // now变prev
    a = b;
    // next变now
    b = c;
    // next的next变成next
    c = c.next;
    b.next = a;
  }
  return b;
}

// 递归写法一，把头节点和剩下的节点分开，分成头节点和尾巴
// 剩下节点的尾巴指向头节点，再返回尾巴自身的头节点
var reverseList = function(head) {
  // 基本操作同上
  if (!head || !head.next) {
    return head;
  }
  // 用tail保存head.next
  var tail = head.next;
  // 删除head.next
  head.next = null;
  var newHead = reverseList(tail);
  tail.next = head;
  return newHead;
}

// 递归写法二，不用tail
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }
  var newHead = reverseList(head.next);
  // 反转
  head.next.next = head;
  // 删除head防止成环，首次是为了让next只能从newHead的末尾进入
  head.next = null;
  return newHead;
}
