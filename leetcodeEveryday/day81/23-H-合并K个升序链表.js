/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
// 暴力转数组
 var mergeKLists = function(lists) {
  //先把所有链表的值放到数组
  const arr = [];
  let node;
  // 对每一个链表进行操作
  for(let list of lists) {
      node = list;
      // 把每个链表放入数组中
      while(node) {
          arr.push(node.val);
          node = node.next;
      }
  }
  //再排序成升序数组
  arr.sort((a,b)=>a-b);

  //再变成链表；
  let newList = new ListNode(-1);
  node = newList;
  for(let num of arr) {
      node.next = new ListNode(num);
      node = node.next;
  }
  return newList.next;
};

// reduce+sort+reduceRight
var mergeKLists = function(lists) {
  return lists.reduce((p, n) => {
      while (n) {
          p.push(n), n = n.next
      }
      return p
  },[]).sort((a, b) => a.val - b.val).reduceRight((p, n) => (n.next = p, p = n, p), null)
};


// 递归写法，两两合并
 var mergeKLists = function(lists) {
  if (!lists.length) return null
  //递归出口，即数组中只剩一条链表时，合并完毕
  if (lists.length === 1) return lists[0]

  //两个一组的合并，合并完了更新数组（每次合并前两个）
  lists.splice(0, 2, mergeTwoLists(lists[0], lists[1]))
  //递归
  return mergeKLists(lists)
};
//尾插法合并两个链表
function mergeTwoLists(l1, l2) {
  let head = new ListNode(), pre = head
  while (l1 && l2) {
      if (l1.val > l2.val) {
          pre.next = l2
          l2 = l2.next
      } else {
          pre.next = l1
          l1 = l1.next
      }
      pre = pre.next
  }
  pre.next = l1 ? l1 : l2
  return head.next
};