var kthFactor = function (n, k) {
  let counter = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      counter += 1;

      if (counter === k) {
        return i;
      }
    }
  }

  return -1;
};