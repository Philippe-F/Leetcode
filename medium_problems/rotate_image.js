// You are given an n x n 2D matrix representing an image, 
// rotate the image by 90 degrees(clockwise).

// You have to rotate the image in -place, which means you have to modify the 
// input 2D matrix directly.DO NOT allocate another 2D matrix and do the rotation.

var rotate = function (matrix) {
  if (!matrix || matrix.length === 0 || matrix.length !== matrix[0].length) {
    throw new Error('invalid matrix');
  }
  if (matrix.length < 2) {
    return matrix;
  }

  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let tmp = matrix[j][i];
      matrix[j][i] = matrix[i][j];
      matrix[i][j] = tmp;
    }
    matrix[i].reverse();
  }

  return matrix;
};