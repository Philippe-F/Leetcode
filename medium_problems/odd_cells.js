var oddCells = function (n, m, indices, odd = 0) {
  let matrix = [...Array(n)].map(() => Array(m).fill(0));

  for (let [r, c] of indices) {
    for (let i = 0; i < m; ++i) ++matrix[r][i];
    for (let j = 0; j < n; ++j) ++matrix[j][c];
  }

  for (let row of matrix) {
    odd += [...row].filter(num => num % 2).length
  }

  return odd;
};