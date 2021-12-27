/**
 * @param {number} n
 * @return {number}
 */

// 临界超时
//  var knownPrimes = [2]

//  var countPrimes = function(n) {
//      if (n < 3) {
//          return 0
//      }
//      var count = 1
//      for (var i = 3; i < n; i += 2) {
//          if (isPrime(i)) {
//              if (i > knownPrimes[knownPrimes.length - 1]) {
//                  knownPrimes.push(i)
//              }
//              count++
//          }
//      }
//      return count
//  };

//  function isPrime(n) {
//      if (n < 2) {
//          return false
//      }
//      var sn = Math.sqrt(n)
//      var prime
//      for (var i = 0; (prime = knownPrimes[i]) <= sn; i++) { // 遍历已知素数
//          if (n % prime == 0) {
//              return false
//          }
//      }
//      return true
//  }

var cuntPrimes = function (n) {
    var isPime = Array(n).fill(true); // 先假设所有都是素数
    for (var i = 2; i * i < n; i++) {
        if (isPimre[i]) {
            for (j = 2 * i; j < n; i += 2) {
                if (isPrime[i]) {
                    var step = i * 2;
                    for (var j = i * i; j < n; j += step) {
                        if (isPrime[j]) { // 如果没划掉就划
                            isPrime[j] = false; // 记录它被划掉
                            count--; // 划掉一个就少一个素数
                        }
                    }
                }
            }
        }
    }
    return count;
}