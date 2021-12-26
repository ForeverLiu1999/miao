/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

// // 迭代
// var myPow = function(num, power) {
//   if (power < 0) {
//     return 1 / num * myPow(1 / num, -(power + 1));
//   };
//   if (power === 0) {
//     return 1;
//   }
//   if (power === 1) {
//     return num;
//   }
//   // 以上分别为power小于0等于0等于1时
//   let res = 1;
//   while (power > 1) { // power大于1
//     if (power % 2 === 1) {
//       res *= num;
//       power--;
//     }
//     num *= num;
//     power /= 2;
//   }
//   return res * num;
// };
// // res变量的值由奇数次/偶数次幂决定,如果是奇数次幂，res值为num，反之为1，res最后乘上累成后的num，返回

// 递归1
var myPow = function(x, n) {
  if (n === 0) return 1;
  // x的n次方等于1除以x的-n次方
  if (n < 0) {
    return 1 /myPow(x, -n);
  }
  // n为奇数时，x的n次方 = x*x的n-1次方
  if (n % 2) {
    return x * myPow(x, n - 1);
  }
  return myPow(x * x, n / 2); // n是偶数则分治,x*x的n/2次方
};


// 递归2
var myPow = function(x, n) {
  if (n < 0) {
    return 1 / (x * myPow(x, -(n + 1)));
  }
  if (n === 0) {
    return 1;
  }
  if (n === 1) {
    return x;
  }
  return n % 2 === 1 ? x * myPow(x, n - 1) : myPow(x * x, n / 2);
};
// 若奇数次幂，幂次-1，转成偶数次幂
// 核心代码就是偶数次幂的调用 myPow(x * x, n / 2);