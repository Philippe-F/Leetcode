
var minSetSize = function (arr) {
  const map = new Map();

  for (const num of arr) {
    if (!map.has(num)) map.set(num, 0);
    map.set(num, map.get(num) + 1);
  }

  
  const countPairs = [...map].sort((a, b) => b[1] - a[1]);

  const target = arr.length / 2; 

  let index = 0;
  let counts = 0;
  let sum = 0;

  while (sum < target) {
    sum += countPairs[index++][1];
    counts++;
  }

  return counts;
};