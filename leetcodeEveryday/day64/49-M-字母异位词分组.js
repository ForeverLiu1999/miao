/**
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
   // 创建一个哈希表
  const map = new Map();
  // 遍历所有字符串
  for (let str of strs) {
    // 创建一个array用来存储浅拷贝的字符串
    let array = Array.from(str);
    // 对每个array排序
    array.sort();
    // 用键来存储字符串
    let key = array.toString();
    // map.get返回对应键指定元素，如果不存在则创建空数组，首次时就在创建空数组
    let list = map.get(key) ? map.get(key) : new Array();
    list.push(str);
    // 为map对象添加一个指定键值的新键值对
    map.set(key, list);
  }
  return Array.from(map.values());
};
// debugger;groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);

// 算数基本定理，任何一个大于1的自然数N，如果不为质数，那么N可以唯一分解成有限个质数的乘积，
// [a,z]Unicode编码 - 97 = [0, 25]对应26个质数
// 每字母代表指数的乘积表示字符串
// 乘法交换律忽略字母顺序，算数基本定理保证不通知书或相同质数不同个数，乘积唯一

/**
 * @param {string[]} strs
 * @return {string[][]}
 */

var groupAnagrams = function (strs) {
  var h = new Map, prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
  for (var i = 0; i < strs.length; i++) {
    for (var j = 0, sum = 1; j < strs[i].length; j++) {
      sum *= prime[strs[i].charCodeAt(j) - 97];
    }
    h.has(sum) ? h.get(sum).push(strs[i]) : h.set(sum, [strs[i]]);
  }
  return Array.from(h.values());
}