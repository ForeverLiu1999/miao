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

  // chunck: function (array, num = 1) {
  //   var result = [];
  //   while (num) {
  //     result.push(array.splice(0, num));
  //     if (array.length == 0) {
  //       break;
  //     }
  //   }
  //   return result;
  // }

  chunck: function (array, size) {
    let res = [];
    if (array.length <= size) {
      return array;
    }
    for (let i = 0; i < Math.ceil(array.length / size); i++) {
      res[i] = array.slice(size * i, size * (i + 1));
    }
    return res;
  },

  compact: function (array) {
    if (!array) return [];
    let result = [];
      for (let i of array) {
        if (array[i]) result.push(array[i]);
      }
      return result;
  },

  difference: function (array1, ...args) {
    let newArray = [];
    let result = [].concat(...args);
    for (let i of array1) {
      if (result.includes[array1[i]]) {
        continue;
      } else {
        newArray.push(array1[i]);
      }
    }
    return newArray;
  },

  drop: function (array, n = 1) {
    if (n > array.length) return [];
    let result = [];
    for (let i = n; i < array.length; i++) result.push(array[i]);
    return result;
  },

  // drop: function (array, n = 1) {
  //   if (n > array.length) return [];
  //   let result = [];
  //   result = result.slice(0, n);
  //   return result;
  // },

  dropRight: function (array, n = 1) {
    if (n > array.length) return [];
    let result = [];
    for (let i = 0; i < array.length - n; i--) result.push(array[i]);
    return result;
  },








}