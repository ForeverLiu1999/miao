// chunk,compact,drop,dropRight,dropRightWhile,dropWhile
// fill,findIndex,findLastIndex
// flatten,flattenDeep,flattenDepth
// fromPairs,head,indexOf,initial,join,last,lastIndexOf,reverse
// uniq,uniqBy,without
// zip,countBy,every,filter,find,forEach,groupBy,keyBy,map
// partition,reduce,reduceRight,reject,sample,shuffle,size,some

// isBoolean,isEmpty,isEqual,
// isNaN,isNil,isNull,isNumber,
// toArray
// ceil,max,maxBy,sumBy,sum,repeat,range,cloneDeep,
var foreverliu1999 = {

  chunk: function (array, num = 1) { //将数组中的元素分成长度为num的组，若不能均分，最后的组都是剩余元素
    var result = [];
    while (num) {
      result.push(array.splice(0, num));
      if (array.length == 0) {
        break;
      }
    }
    return result;
  },

  compact: function (array) { //删出所有错误值的数组，false,NaN,0,'',undefined,dalsey
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (Boolean(array[i]) == false) {
        result.push();
      } else if (typeof (array[i]) == 'string') {
        result.push();
      } else {
        result.push(array[i]);
      }
    }
    return result;
  },

  difference: function (array, ...values) {

  },

  drop: function (array, n = 1) { //从头开始删除数组的n个元素
    if (n > array.length) {
      return [];
    }

    var result = [];
    for (var i = n; i < array.length; i++) {
      result.push(array[i]);
    }
    return result;
    // array.slice(0,n)
    // return array
  },

  dropRight: function (array, n = 1) { //从末尾开始删除数组的n个元素
    if (n > array.length) {
      return [];
    }
    var result = [];
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i]);
    }
    return result;
  },

  fill: function (array, value, start = 0, end = array.length) { //将value的值填充到[start,end)数组的这个范围
    for (var i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  },

  flatten: function (array) { //将多维数组展开一层
    // reduce初始值为[]
    return array.reduce((prev, item) => {
      // 如果是数组则遍历取到每一个元素push进去
      if (Array.isArray(item)) {
        for (let it of item) {
          prev.push(it)
        }
        // 如果不是数组就是元素，直接push进去就行了
      } else prev.push(item)
      return prev
    }, [])
  },

  // 将array递归为一维数组。
  flattenDeep: function (array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result.push(...this.flattenDeep(array[i]));
      } else {
        result.push(array[i]);
      }
    }
    return result;
  },
  head: function (array) { //取出数组的第一个元素
    return array[0];
  },

  // 返回首次 value 在数组 array 中被找到的索引值
  indexOf: function (array, value, fromIndex = 0) {
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1
  },

  initial: function (array) { //取出除数组最后一个元素的数组
    var result = [];
    for (var i = 0; i < array.length - 1; i++) {
      result.push(array[i]);
    }
    return result;
  },

  //数组转换成字符串,并用separator中的符号分隔
  join: function (arr, separator = ',') {
    let res = '';
    for (let item of arr) {
      res += '' + item + separator;
    }
    // 删除最后一个元素
    return res.slice(0, -1);
  },


  last: function (array) { //获取数组最后一个元素
    return array[array.length - 1];
  },

  //
  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    // 从后往前遍历找到返回索引
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i;
      }
    }
    return -1;
  },

  //反转数组
  reverse: function (array) {
    var result = [];
    // 从后往前遍历，push进result得到反转数组
    for (var i = array.length - 1; i >= 0; i--) {
      result.push(array[i]);
    }
    return result;
  },

  // 数组去重
  uniq: function (array) {
    var result = [];
    for (let i of array) {
      // 如果result中不存在i，就push进去
      if (!result.includes(i)) {
        result.push(i);
      }
    }
    return result
  },

  // uniqBy

  // 创建一个数组，其中包含array中与value值不相同的所有元素
  without: function (array, ...value) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      // 把不包含的push进result
      if (!value.includes(array[i])) {
        result.push(array[i]);
      }
    }
    return result;
  },

  // 创建一个分组元素的数组，数组的第一个元素包含所有给定数组的第一个元素，数组的第二个元素包含所有给定数组的第二个元素，以此类推。
  zip: function (...array) {
    let result = [];
    // 外层遍历第几个数组
    for (let i = 0; i < array[0].length; i++) {
      let ary = [];
      // 内层把第i个数组的第j个元素push进ary数组
      for (let j = 0; j < array.length; j++) {
        ary.push(array[j][i]);
      }
      // 再把ary数组push进result
      result.push(ary);
    }
    return result;
  },

  // 返回collection（集合）的长度，如果集合是类数组或字符串，返回其 length ；如果集合是对象，返回其可枚举属性的个数。
  size: function (collection) {
    return collection.length || Object.keys(collection).length;
  },



}