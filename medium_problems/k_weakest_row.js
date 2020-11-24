// Given a m * n matrix mat of ones(representing soldiers) and 
// zeros(representing civilians), return the indexes of the k weakest rows in 
// the matrix ordered from the weakest to the strongest.

// A row i is weaker than row j, if the number of soldiers in row i is less than 
// the number of soldiers in row j, or they have the same number of soldiers but 
// i is less than j.Soldiers are always stand in the frontier of a row, that is, 
// always ones may appear first and then zeros.

var kWeakestRows = function (mat, k) {
  mat = mat.map((row, i) => [row.reduce((acc, num) => acc += num), i]);
  mat.sort((num1, num2) => num1[0] === num2[0] ? num1[1] - num2[1] : num1[0] - num2[0]);
  mat = mat.map(row => row[1]);
  return mat.slice(0, k)
};