// Given a binary tree, return the sum of values of its deepest leaves.

let deepestLeavesSum = (root, depthSum = {}, max = 0) => {
  let go = (root, depth = 0) => {
    max = Math.max(max, depth);
    if (!depthSum[depth])
      depthSum[depth] = 0;
    depthSum[depth] += root.val;
    if (root.left) go(root.left, depth + 1);
    if (root.right) go(root.right, depth + 1);
  };
  go(root);
  return depthSum[max];
};