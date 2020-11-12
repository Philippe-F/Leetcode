var maxDepth = function (root) {
  function postOrder(node) {
    if (!node) return 0;
    let left = postOrder(node.left) + 1,
      right = postOrder(node.right) + 1;

    return Math.max(left, right);
  }

  return postOrder(root)
};