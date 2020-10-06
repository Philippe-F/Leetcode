// Given an array of distinct integers arr, find all pairs of elements with the 
// minimum absolute difference of any two elements. 

var minimumAbsDifference = function (arr) {
  arr = arr.sort((a, b) => a - b);
  let min = arr[0], max = arr[1], diff = max - min, newArr = [];

  for (let i = 1; i < arr.length; i++) {
    if ((arr[i + 1] - arr[i]) < diff) {
      min = arr[i]
      max = arr[i + 1]
      diff = max - min
    }
  }

  for (let i = 0; i < arr.length; i++) {
    if (Math.abs(arr[i] - arr[i + 1]) === diff) {
      newArr.push([arr[i], arr[i + 1]])
    }
  }

  return newArr
};