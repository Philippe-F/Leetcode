var diagonalSum = function (mat) {
  let sum = 0, length = mat.length;

  for (let i = 0, j = length - 1; i < length; i++, j--) {
    i === j ? sum += mat[i][i] : sum += mat[i][i] + mat[i][j];
  }

  return sum;
}; 