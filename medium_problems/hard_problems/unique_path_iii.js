// On a 2 - dimensional grid, there are 4 types of squares:

// * 1 represents the starting square.There is exactly one starting square.
// * 2 represents the ending square.There is exactly one ending square.
// * 0 represents empty squares we can walk over.
// * - 1 represents obstacles that we cannot walk over.
// Return the number of 4 - directional walks from the starting square to the 
// ending square, that walk over every non - obstacle square exactly once.



function uniquePathsIII(grid) {
  if (grid == null || grid.length === 0) return 0;

  const h = grid.length;
  const w = grid[0].length;
  const dirs = [[-1, 0], [0, 1], [1, 0], [0, -1]];
  let start;
  let end;
  let emptyCount = 1;
  let res = 0;

  for (let i = 0; i < h; i++) {
    for (let j = 0; j < w; j++) {
      if (grid[i][j] === 0) emptyCount++;
      else if (grid[i][j] === 1) start = [i, j];
      else if (grid[i][j] === 2) end = [i, j];
    }
  }



  go(start[0], start[1], 0);
  return res;
}