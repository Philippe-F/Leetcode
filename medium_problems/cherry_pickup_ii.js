// Given a rows x cols matrix grid representing a field of cherries.Each cell in 
// grid represents the number of cherries that you can collect.

// You have two robots that can collect cherries for you, 
// Robot #1 is located at the top - left corner(0, 0), and Robot #2 is 
// located at the top - right corner(0, cols - 1) of the grid.

const cherryPickup = function (grid) {
  const getValue = (row, column) => {
    if (grid[row] && grid[row][column] >= 0) {
      return grid[row][column]
    }
    return 0
  }
  const next = (row, column) => {
    const arr = []
    if (column - 1 >= 0) {
      arr.push([row + 1, column - 1])
    }
    arr.push(([row + 1, column]))
    if (column + 1 <= grid[0].length - 1) {
      arr.push([row + 1, column + 1])
    }
    return arr
  }
  const memo = {}
  const aux = (x1, y1, x2, y2) => {
    const key = `${x1},${y1},${x2},${y2}`
    if (memo[key] !== undefined) {
      return memo[key]
    }
    if (x1 === grid.length && x2 === grid.length) {
      return 0
    }
    let current = 0
    if (x1 === x2 && y1 === y2) {
      current = getValue(x1, y1)
    } else {
      current = getValue(x1, y1) + getValue(x2, y2)
    }
    let max = current
    for (const [nextX1, nextY1] of next(x1, y1)) {
      for (const [nextX2, nextY2] of next(x2, y2)) {
        max = Math.max(
          max, current + aux(nextX1, nextY1, nextX2, nextY2),
        )
      }
    }
    memo[key] = max
    return memo[key]
  }
  return aux(0, 0, 0, grid[0].length - 1)
}