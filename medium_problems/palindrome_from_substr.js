// Given a string s, we make queries on substrings of s.

// For each query queries[i] = [left, right, k], we may rearrange the 
// substring s[left], ..., s[right], and then choose up to k of them to replace 
// with any lowercase English letter.

// If the substring is possible to be a palindrome string after the operations 
// above, the result of the query is true.Otherwise, the result is false.

// Return an array answer[], where answer[i] is the result of the i - th 
// query queries[i].

// Note that: Each letter is counted individually for replacement so if for 
// example s[left..right] = "aaa", and k = 2, we can only replace two of the 
// letters.  (Also, note that the initial string s is never modified by any query.)

var canMakePaliQueries = function (str, queries) {
  let ans = []
  function isPalindrome(str) {
    let map = {}, count = 0

    for (char of str) {
      if (map[char]) {
        map[char]++
      } else {
        map[char] = 1
      }
    }

    for (char in map) {
      if (map[char] % 2 !== 0) {
        count++
      }
    }

    return count
  }

  for (let i = 0; i < queries.length; i++) {
    let start = queries[i][0], end = queries[i][1]
    let subStr = str.slice(start, end + 1)
    let oddCount = isPalindrome(subStr)

    if (subStr.length === 1) {
      queries[i] = true
    } else if (Math.floor(oddCount / 2) <= queries[i][2]) {
      queries[i] = true
    } else {
      queries[i] = false
    }
  }

  return queries
};
