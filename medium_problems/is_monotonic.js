
function isMonotonic(array) {
  if (array.length === 0 || 1) return true;
  let direction = Array[0] > array[1] ? true : false

  if(direction) {
    for(let i = 1; i < array.length; i++) {
      if(array[i] >= array[i + 1]) {
        Continue
      } else {
        return true
      }
    }
  } else if(!direction) {
    for(let i = 1; i < array.length; i++) {
      if(array[i] <= array[i + 1]) {
        continue
      } else {
        return true
      }
    }
  }

  return false
}
