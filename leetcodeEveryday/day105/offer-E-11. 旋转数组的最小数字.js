// offer-E-11. 旋转数组的最小数字
var minArray = function(numbers) {
  let low = 0;
  let high = numbers.length - 1;
  while (low < high) {
      const pivot = low + Math.floor((high - low) / 2);
      if (numbers[pivot] < numbers[high]) {
          high = pivot;
      } else if (numbers[pivot] > numbers[high]) {
          low = pivot + 1;
      } else {
          high -= 1;
      }
  }
  return numbers[low];
};

var minArray = function(numbers) {
  let left = 0, right = numbers.length - 1;
  while(left < right){
      let middle = left + ~~((right - left) / 2);
      if(numbers[middle] > numbers[right]) left = middle + 1;
      else if(numbers[middle] < numbers[right]) right = middle;
      else right--;
  }
  return numbers[left];
};

// 暴破【不推荐】
function minArray(numbers) {
  for(let i = 0; i < numbers.length; i++){
      if(numbers[i] < numbers[0]){
          return numbers[i];
      }
  }
  return numbers[0];
}