// Given an m x n matrix.If an element is 0, set its entire row and column to 0. 
// Do it in -place.

var setZeroes = function (matrix) {
  let rowHasZero = false, colHasZero = false;

  // check if first row has a zero
  for (let i = 0; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      rowHasZero = true;
      break;
    }
  }

  // check if first col hasd a zero
  for (let j = 0; j < matrix.length; j++) {
    if (matrix[j][0] === 0) {
      colHasZero = true;
      break;
    }
  }

  // check for zeros in the entire matrix
  for (let i = 1; i < matrix.length; i++) {
    for (let j = 1; j < matrix[0].length; j++) {
      if (matrix[i][j] === 0) {
        matrix[i][0] = 0;
        matrix[0][j] = 0;
      }
    }
  }

  function zeroRow(matrix, row) {
    for (let i = 0; i < matrix[0].length; i++) {
      matrix[row][i] = 0;
    }
  }

  function zeroCol(matrix, col) {
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }


  // Nullify rows based on values in the first column
  for (let i = 1; i < matrix.length; i++) {
    if (matrix[i][0] === 0) {
      zeroRow(matrix, i);
    }
  }

  // Nullify col based on values in the first row
  for (let i = 1; i < matrix[0].length; i++) {
    if (matrix[0][i] === 0) {
      zeroCol(matrix, i);
    }
  }

  // Nullify first row
  if (rowHasZero) {
    zeroRow(matrix, 0);
  }

  // Nullify first col
  if (colHasZero) {
    zeroCol(matrix, 0);
  }

  return matrix
};