/**
 * @param {number[][]} rectangle
 */
var SubrectangleQueries = function (rectangle) {
  this.rectangle = rectangle;
};

SubrectangleQueries.prototype.updateSubrectangle = function (row1, col1, row2, col2, newValue) {
  for (let row = row1; row <= row2; row += 1) {
    for (let col = col1; col <= col2; col += 1) {
      this.rectangle[row][col] = newValue;
    }
  }
};

SubrectangleQueries.prototype.getValue = function (row, col) {
  return this.rectangle[row][col];
};