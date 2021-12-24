/**
 * @param {number} num
 * @return {string}
 */
 const BASE = 7;
 var convertToBase7 = function(num) {
     const sign = num < 0, ans = [];
     if(sign){
         num *= -1;
     }
     do{
         ans.push(num%BASE + "");
         num = Math.floor(num/BASE);
     }while(num > 0);
     if(sign)
         ans.push("-");
     return ans.reverse().join("");
 };