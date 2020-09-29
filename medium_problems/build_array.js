// Given an array target and an integer n.In each iteration, you will read a 
// number from  list = { 1, 2, 3..., n }.

var buildArray = function (target, n) {
  const result = [];
  let current = 1;
  let index = 0;

  while (index < target.length) {
    result.push("Push");
    if (current++ === target[index]) {
      index++;
    } else {
      result.push("Pop");
    }
  }

  return result;
};