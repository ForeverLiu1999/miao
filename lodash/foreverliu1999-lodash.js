var foreverliu1999 = {

  chunk: function (array, num = 1) { //将数组中的元素分成长度为num的组，若不能均分，最后的组都是剩余元素
    var result = []
    while (num) {
      result.push(array.splice(0, num))
      if (array.length == 0) {
        break
      }
    }
    return result
  },

  compact: function (array) { //删出所有错误值的数组，false,NaN,0,'',undefined,dalsey
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Boolean(array[i]) == false) {
        result.push()
      } else if (typeof (array[i]) == 'string') {
        result.push()
      } else {
        result.push(array[i])
      }
    }
    return result
  },

  drop: function (array, n = 1) { //从头开始删除数组的n个元素
    if (n > array.length) {
      return []
    }

    var result = []
    for (var i = n; i < array.length; i++) {
      result.push(array[i])
    }
    return result


    // array.slice(0,n)
    // return array
  },

  dropRight: function (array, n = 1) { //从末尾开始删除数组的n个元素
    if (n > array.length) {
      return []
    }
    var result = []
    for (var i = 0; i < array.length - n; i++) {
      result.push(array[i])
    }
    return result
  },

  //dropRightWhile
  // dropWhile

  fill: function (array, value, start = 0, end = array.length) { //将value的值填充到[start,end)数组的这个范围
    for (var i = start; i < end; i++) {
      array[i] = value
    }
    return array
  },

  // findIndex
  // findLastIndex

  flatten: function (array) { //将多维数组展开一层
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        for (var j = 0; j < array[i].length; j++) {
          result.push(array[i][j])
        }
      } else {
        result.push(array[i])
      }
    }
    return result
  },


  flattenDeep: function (array) { //展开多维数组(递归)
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        result.push(...this.flattenDeep(array[i]))
      } else {
        result.push(array[i])
      }
    }
    return result
  },


  //flattenDepth
  // fromPairs

  head: function (array) { //取出数组的第一个元素
    return array[0]
  },


  indexOf: function (array, value, fromIndex = 0) {
    if (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = fromIndex; i < array.length; i++) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },

  initial: function (array) { //取出除数组最后一个元素的数组
    var result = []
    for (var i = 0; i < array.length - 1; i++) {
      result.push(array[i])
    }
    return result
  },

  join: function (array, separator = ',') { //数组转换成字符串,并用separator中的符号分隔
    var result = ''
    var len = array.length - 1
    for (var i = 0; i < len; i++) {
      result += array[i] + '' + separator
    }
    return result + array[len] + ''
  },


  last: function (array) { //获取数组最后一个元素
    return array[array.length - 1]
  },


  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    if (fromIndex < 0) {
      fromIndex += array.length
    }
    for (var i = fromIndex; i >= 0; i--) {
      if (array[i] == value) {
        return i
      }
    }
    return -1
  },


  reverse: function (array) { //反转数组
    var result = []
    for (var i = array.length - 1; i >= 0; i--) {
      result.push(array[i])
    }
    return result
  },

  uniq: function (array) { //去除数组中的重复数字
    var map = {}
    var result = []
    for (var i = 0; i < array.length; i++) {
      if (array[i] in map) {
        map[array[i]]++
      } else {
        map[array[i]] = 1
        result.push(array[i])
      }
    }
    return result
  },

  // uniqBy

  without: function (array, ...value) { //删出array中与value相同的元素，并返回新的数组
    var result = []

    for (var i = 0; i < array.length; i++) {
      if (value.includes(array[i])) {
        continue
      }
      result.push(array[i])
    }
    return result
  },

  zip: function (...array) { //将多个数组，按顺序重组
    var result = []
    for (var i = 0; i < array[0].length; i++) {
      var ary = []
      for (var j = 0; j < array.length; j++) {
        ary.push(array[j][i])
      }
      result.push(ary)
    }
    return result
  }

  // countBy
  // every
  // filter
  // find
  // forEach
  // groupBy
  // keyBy
  // map
  // partition
  // reduce
  // reduceRight
  // reject
  // sample
  // shuffle
  // size
  // some
  // isBoolean
  // isEmpty
  // isEqual
}