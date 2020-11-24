
// Given n and m which are the dimensions of a matrix initialized by zeros and 
// given an array indices where indices[i] = [ri, ci].For each pair of[ri, ci] 
// you have to increment all cells in row ri and column ci by 1.

// Return the number of cells with odd values in the matrix after applying the 
// increment to all indices.

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