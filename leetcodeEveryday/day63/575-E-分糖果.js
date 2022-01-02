/**
 * @param {number[]} candyType
 * @return {number}
 */
 var distributeCandies = function(candyType) {
  var types = {}; // 每种糖出现过没有,key是糖
  for (var i = 0; i < candyType.length; i++) {
    var type = candyType[i];
    types[type] = 1;
  }
  var size = 0;
  for (var candy in types) {
    size++;
  }
  if (size > candyType.length / 2) {
    return candyType.length / 2;
  } else {
    size;
  }
};