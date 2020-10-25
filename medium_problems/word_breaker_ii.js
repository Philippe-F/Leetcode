const dfs = (s, set, memo) => {
  if (memo.has(s)) {
    return memo.get(s);
  }

  let i = 1;
  const result = [];

  while (i < s.length + 1) {
    const thisWord = s.substring(0, i);

    if (set.has(thisWord)) {
      if (i === s.length) {
        result.push(thisWord);
        break;
      }

      const nextCombos = dfs(s.substring(i), set, memo);
      nextCombos.forEach(combo => {
        result.push(`${thisWord} ${combo}`);
      })
    }

    i++;
  }

  memo.set(s, result);

  return result;
}

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function (s, wordDict) {
  return dfs(s, new Set(wordDict), new Map);
};