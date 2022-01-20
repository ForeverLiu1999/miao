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
