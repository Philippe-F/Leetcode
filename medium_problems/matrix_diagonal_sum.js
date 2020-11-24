// Given a square matrix mat, return the sum of the matrix diagonals.

// Only include the sum of all the elements on the primary diagonal and all the 
// elements on the secondary diagonal that are not part of the primary diagonal.

var diagonalSum = function (mat) {
  let sum = 0, length = mat.length;

  for (let i = 0, j = length - 1; i < length; i++, j--) {
    i === j ? sum += mat[i][i] : sum += mat[i][i] + mat[i][j];
  }

  return sum;
}; 