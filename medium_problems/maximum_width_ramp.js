// Given an array A of integers, a ramp is a tuple(i, j) 
// for which i < j and A[i] <= A[j].The width of such a ramp is j - i.

// Find the maximum width of a ramp in A.If one doesn't exist, return 0.

var maxWidthRamp = function (A) {
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    let j = A.length - 1;
    while (A[j] < A[i]) j--;
    result = Math.max(result, j - i);
  };

  return result;
}