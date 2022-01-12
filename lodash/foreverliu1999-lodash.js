var foreverliu1999 = {
  // chunk
  chunk: (array, size) => {
    // 如果ary小于size的长，则直接返回array
    if (array.length <= size) {
      return array;
    }
    let result = [];
    let temp = [];
    for (let i = 0; i < array.length; i++) {
      temp.push(array[i]);
      // 如果一旦temp长度达到size了，就把temppush进result里，并创建下一个temp空数组
      if (temp.length == size) {
        result.push(temp);
        temp = [];
      }
    }
    // array已经被全遍历完一遍了,把temp二号push进去就行了
    if (temp.length !== 0) {
      result.push(temp);
    }
    return result;
  }
}

// compact
compact: (array) => {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      result.push(array[i]);
    }
    return result;
  }

  // drop
  drop: (array, number) => {
    let result = [];
    if (array.length <= number) {
      return result;
    }
    else if (array.length > number) {
      for (i = number; i < array.length; i++) {
        result.push(array[i]);
      }
    }
    return result;
  }
}