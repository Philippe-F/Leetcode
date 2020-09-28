// Given a non - negative integer, you could swap two digits at most once to get 
// the maximum valued number.Return the maximum valued number you could get.

var maximumSwap = function (num) {
  const numArr = num.toString().split("");
  let max;
  let swapIndex1
  let swapIndex2;
  for (let i = 0; i < numArr.length - 1; i++) {
    const val = parseInt(numArr[i]);
    max = val + 1;
    swapIndex1 = i;
    swapIndex2 = i;
    for (let j = i + 1; j < numArr.length; j++) {
      const nextVal = parseInt(numArr[j]);
      if (nextVal >= max) {
        max = nextVal;
        swapIndex2 = j;
      }
    }
    if (swapIndex1 != swapIndex2) {
      break;
    }
  }

  let temp = numArr[swapIndex1];
  numArr[swapIndex1] = numArr[swapIndex2];
  numArr[swapIndex2] = temp;
  return parseInt(numArr.join(""));
};