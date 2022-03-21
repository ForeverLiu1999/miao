// 剑指 Offer 58 - I-E-翻转单词顺序
/**
 * @param {string} s
 * @return {string}
 */
// 先用trim把字符串两端空格去掉，再用split('')把字符串切成以空格为界限的单词，filter过滤掉所有空格，reverse()反转再join()拼接
 var reverseWords = function(s) {
  return s.trim().split(' ').filter(item => item != '').reverse().join(' ');
};

// 正则
var reverseWords = function (s) {
  s = s.replace(/ +/g, ' ');
  return s.split(' ').reverse().join(' ').trim();
}

// 双指针
var reverseWords=function(s){
  // 还是先删除空格
    let str=s.trim().split(/\s+/g);
    // 定义双指针指向
    let [i,j]=[0,str.length-1];
    // 限定指针遍历范围
    while(i<j)[str[i++],str[j--]]=[str[j],str[i]];
    return str.join(" ");
};