/**
 * @param {number} n
 * @return {number}
 */

// 临界超时
 var knownPrimes = [2]

 var countPrimes = function(n) {
     if (n < 3) {
         return 0
     }
     var count = 1
     for (var i = 3; i < n; i += 2) {
         if (isPrime(i)) {
             if (i > knownPrimes[knownPrimes.length - 1]) {
                 knownPrimes.push(i)
             }
             count++
         }
     }
     return count
 };

 function isPrime(n) {
     if (n < 2) {
         return false
     }
     var sn = Math.sqrt(n)
     var prime
     for (var i = 0; (prime = knownPrimes[i]) <= sn; i++) { // 遍历已知素数
         if (n % prime == 0) {
             return false
         }
     }
     return true
 }