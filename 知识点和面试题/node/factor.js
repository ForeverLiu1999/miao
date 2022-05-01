// 输入: node factor.js 1000     输出:2 2 2 5 5 5

var number = Number (process.argv [2]); // 0 1 2,argv[2]就是第三个参数

function factor (num) {
  var factors = [];
  for (var i = 2; num > 1; i++) {
    if (num % i == 0) {
      factors.push(i);
      num = num / i;
      i--;
    }
  }
  return factors;
}

var factors = factor (number);
console.log (number + ': ' + factors.join (' '));

// 利爪7次 鞭笞阻止治疗150