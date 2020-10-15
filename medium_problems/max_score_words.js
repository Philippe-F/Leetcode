// Given a list of words, list of  single letters(might be repeating) and 
// score of every character.

// Return the maximum score of any valid set of words formed by using 
// the given letters(words[i] cannot be used two or more times).

// It is not necessary to use all characters in letters and each letter 
// can only be used once.Score of 
// letters 'a', 'b', 'c', ... , 'z' is given by score[0], score[1], ... , score[25] respectively.

var maxScoreWords = function (words, letters, score) {
  var aCode = "a".charCodeAt();
  var lettersCount = new Array(26).fill(0);
  for (var i = 0; i < letters.length; i++) {
    lettersCount[letters[i].charCodeAt() - aCode]++;
  }

  var wordsLetters = new Array(words.length);
  for (var i = 0; i < words.length; i++) {
    wordsLetters[i] = new Array(26).fill(0);
    for (var j = 0; j < words[i].length; j++) {
      wordsLetters[i][words[i][j].charCodeAt() - aCode]++;
    }
  }

  var passed;
  var calcScore;
  var validWords = [];
  for (var i = 0; i < words.length; i++) {
    passed = true;
    calcScore = 0;

    for (var j = 0; j < wordsLetters[i].length; j++) {
      if (wordsLetters[i][j] === 0) {
        continue;
      }

      if (wordsLetters[i][j] > lettersCount[j]) {
        passed = false;
        break;
      }

      calcScore += wordsLetters[i][j] * score[j];
    }

    if (passed) {
      validWords.push({ index: i, score: calcScore });
    }
  }

  var backtrack = function (index) {
    var max = 0;

    for (var i = index; i < validWords.length; i++) {
      var res = validWords[i].score;
      var wordIndex = validWords[i].index;
      var valid = true;
      var to = 26;

      for (var j = 0; j < to; j++) {
        lettersCount[j] -= wordsLetters[wordIndex][j];
        if (lettersCount[j] < 0) {
          valid = false;
          to = j + 1;
          break;
        }
      }

      if (valid) {
        res += backtrack(i + 1);
        max = Math.max(res, max);
      } else {
        res = 0;
      }

      for (var j = 0; j < to; j++) {
        lettersCount[j] += wordsLetters[wordIndex][j];
      }
    }

    return max;
  }

  return backtrack(0);
};