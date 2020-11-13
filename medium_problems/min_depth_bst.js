var minDepth = function (root) {

  function dfs(node) {
    if (!node) return 0;

    let left = dfs(node.left) + 1,
      right = dfs(node.right) + 1,
      count = Math.min(left, right)

    return count > 1 ? count : Math.max(left, right);
  }

  return dfs(root);
};