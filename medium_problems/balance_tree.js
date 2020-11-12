var isBalanced = function (root) {
  let res = true
  function postOrder(node) {
    if (!node) return 0;
    let left = postOrder(node.left),
      right = postOrder(node.right)

    if (Math.abs(left - right) > 1) res = false;
    return 1 + Math.max(left, right)
  }

  postOrder(root);
  return res;
};