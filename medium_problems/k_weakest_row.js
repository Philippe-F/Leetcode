var kWeakestRows = function (mat, k) {
  mat = mat.map((row, i) => [row.reduce((acc, num) => acc += num), i]);
  mat.sort((num1, num2) => num1[0] === num2[0] ? num1[1] - num2[1] : num1[0] - num2[0]);
  mat = mat.map(row => row[1]);
  return mat.slice(0, k)
};