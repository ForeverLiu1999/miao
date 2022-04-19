// 1122-E-数组的相对排序
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
// 聪明的sort排序
var relativeSortArray = function (arr1, arr2) {
  //sort(a,b) 正常a,b中谁小排到前面
  return arr1.sort((a, b) => {
    let a1 = arr2.indexOf(a);
    let b1 = arr2.indexOf(b);
    if (a1 == -1 && b1 == -1) { //如果a和b都不在arr2中，正常的大小升序
      return a - b;
    } else if (a1 == -1) { //如果a不在arr2中，a-b=1说明a>b，a就得排在后面
      return 1;
    } else if (b1 == -1) { //如果b不在arr2中，a-b=-1说明b>a，b就得排在后面
      return -1;
    } else { //如果都在arr2中，就看他们谁先出现在arr2中，如果a在前面，那么a1就小于b1,return 就是小于0的，所以a在前面
      return a1 - b1;
    }
  })
};

var relativeSortArray = (arr1, arr2) => {
  const counts = new Array(1001).fill(0);
  for (const n of arr1) { // 统计arr1数字的出现次数
    counts[n]++;
  }
  const res = [];
  for (const n of arr2) { // 遍历arr2
    while (counts[n] > 0) { // 出现次数>0，循环推入res
      res.push(n); // 循环结束时，值变为0
      counts[n]--;
    }
  }
  for (let i = 0; i < counts.length; i++) { // 遍历counts
    while (counts[i] > 0) { // 非0项的索引 循环推入res
      res.push(i);
      counts[i]--;
    }
  }
  return res;
};
