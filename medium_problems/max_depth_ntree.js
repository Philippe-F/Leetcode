var maxDepth = (root) => {
  let traverse = (root, max = 1) => {
    root.children.forEach(child => {
      max = Math.max(max, 1 + traverse(child));
    });
    return max;
  }
  return !root ? 0 : traverse(root);
};