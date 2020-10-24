var strongPasswordChecker = function (s) {
  if (!s.length) return 6

  //It has at least 6 characters and at most 20 characters.
  let tAdd = 0, tRemove = 0
  if (s.length < 6) {
    tAdd = 6 - s.length
  } else if (s.length > 20) {
    tRemove = s.length - 20
  }
  //It must contain at least one lowercase letter, at least one uppercase letter, and at least one digit.
  let tAddOrChange = 0
  if (!/\d/.test(s)) tAddOrChange++
  if (!/[a-z]/.test(s)) tAddOrChange++
  if (!/[A-Z]/.test(s)) tAddOrChange++
  let tChange = tAddOrChange > tAdd ? tAddOrChange - tAdd : 0
  //It must NOT contain three repeating characters in a row ("...aaa..." is weak, but "...aa...a..." is strong, assuming other conditions are met).
  let repeats = getRepeats()
  let need3 = tryChangeWithLeft(repeats, tRemove, tAdd + tChange)

  // add up
  return tAdd + tRemove + tChange + need3

  /**
   * try with existing remove/change/add
   * @param {*} repeats 
   * @param {*} leftRemove 
   * @param {*} countDownAddOrChange 
   */
  function tryChangeWithLeft(repeats, leftRemove, countDownAddOrChange) {
    // if we all use change/add, e.g. all change in repeats every 3rd char  
    let allUseChange = 0, parts = { 2: 0, 1: 0, 0: 0 }
    for (let repeat of repeats) {
      let m = repeat % 3
      parts[m]++
      let change = (repeat - m) / 3
      parts[2] += change
      allUseChange += change
    }
    // existing add/change covered
    if (countDownAddOrChange >= allUseChange) return 0

    // try use existing remove
    let tLeftRemove = leftRemove, needChange = allUseChange - countDownAddOrChange

    // when we split 5 into 2,2 you can use 3 remove to replace 1 change 
    for (let i = 0; i < 3 && tLeftRemove > i; i++) {
      // so you have to collect the parts, and you can notice 3 split into 2,0 and 4 into 2,1 and so on 
      let removet = Math.min(Math.floor(tLeftRemove / (i + 1)), parts[i])
      tLeftRemove -= removet * (i + 1)
      needChange -= removet
    }

    // you cannot use existing opts any more
    return needChange
  }

  /**
   * find all repeats [5,6] means have one repeat with 5 same chars and one with 6
   */
  function getRepeats() {
    let last, repeat = 0, repeats = []
    for (let i = 0; i < s.length; i++) {
      if (s[i] !== last) {
        last = s[i]
        if (repeat > 2) {
          repeats.push(repeat)
        }
        repeat = 1
        continue
      }

      repeat++
    }
    repeat > 2 && repeats.push(repeat)
    return repeats
  }
};