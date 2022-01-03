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