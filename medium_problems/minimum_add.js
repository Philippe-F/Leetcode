// Given a string S of '(' and ')' parentheses, we add the minimum number 
// of parentheses('(' or ')', and in any positions) so that the resulting 
// parentheses string is valid.

var minAddToMakeValid = function (S) {
  if (S.length === 0) return 0;
  let count = [S[0]]

  for (let i = 1; i < S.length; i++) {
    if (S[i] === ")" && count[count.length - 1] === "(") {
      count.pop()
    } else {
      count.push(S[i])
    }
  }

  return count.length
};