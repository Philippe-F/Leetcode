// We have a string S of lowercase letters, and an integer array shifts.

// Call the shift of a letter, the next letter in the alphabet, 
// (wrapping around so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

// Now for each shifts[i] = x, we want to shift the first i + 1 letters of S, x times.

// Return the final string after all such shifts to S are applied.

var shiftingLetters = function (S, shifts) {
  let shiftsSum = shifts.reduce((sum, ele) => sum += ele),
    alpha = 'abcdefghijklmnopqrstuvwxyz',
    newStr = ''

  for (char of S) {
    let idx = alpha.indexOf(char.toLowerCase()),
      newIdx = idx + shiftsSum

    newStr += alpha[newIdx % 26]
    shiftsSum = shiftsSum - shifts[0]
    shifts = shifts.slice(1)
    console.log(shiftsSum)
  }

  return newStr
};