// A query word matches a given pattern if we can insert lowercase letters to the 
// pattern word so that it equals the query. (We may insert each character at any 
// position, and may insert 0 characters.)

// Given a list of queries, and a pattern, return an answer list of booleans, 
// where answer[i] is true if and only if queries[i] matches the pattern.


var camelMatch = function (queries, pattern) {
  const regexp = new RegExp('^[a-z]*' + pattern.replace(/([a-zA-z])/g, '$1[a-z]*') + '$');
  return queries.map(query => regexp.test(query));
};
