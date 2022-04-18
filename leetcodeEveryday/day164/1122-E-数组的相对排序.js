// 1122-E-数组的相对排序
/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
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