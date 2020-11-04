var xorOperation = function (n, start) {
  let arr = [], xor
  for (let i = 0; i < n; i++) {
    arr.push(start + (i * 2))
  }
  xor = arr[0]
  for (let i = 1; i < n; i++) {
    xor = xor ^ arr[i]
  }
  return xor
};