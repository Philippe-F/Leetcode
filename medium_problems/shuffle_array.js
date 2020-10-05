// Given the array nums consisting of 2n elements in the 
// form[x1, x2,..., xn, y1, y2,..., yn].

// Return the array in the form[x1, y1, x2, y2,..., xn, yn].

var shuffle = function (nums, n) {
  let newNums = [], i = 0
  while (newNums.length < nums.length) {
    newNums.push(nums[i])
    newNums.push(nums[i + n])
    i++
  }

  return newNums
};