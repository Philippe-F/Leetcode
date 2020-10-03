var maxSatisfaction = function (satisfaction) {
  satisfaction.sort((a, b) => a - b);
  let positiveIndex = -1;
  for (let i = satisfaction.length - 1; i >= 0; --i) {
    if (satisfaction[i] > 0) {
      positiveIndex = i;
    }
  }

  if (positiveIndex === -1) {
    return 0;
  }

  let max = 0;
  let multiplier;
  let sum;

  while (positiveIndex >= 0) {
    sum = 0;

    multiplier = satisfaction.length - positiveIndex;
    for (let i = satisfaction.length - 1; i >= positiveIndex; --i) {
      sum += satisfaction[i] * multiplier--;
    }

    if (sum > max) {
      max = sum;
    }

    positiveIndex--;
  }

  return max;
};