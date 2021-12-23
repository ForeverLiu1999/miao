/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let num=new Set(nums)
  nums.splice(0) // splice(0)会清空原数组太骚了
  num.forEach((el)=>{
  nums.push(el)
  })
  return nums.length
  };