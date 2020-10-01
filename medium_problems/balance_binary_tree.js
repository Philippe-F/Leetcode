var balanceBST = function (root) {
  const stack = [], inorder = [];
  let curr = root;
  while (curr || stack.length) {
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    inorder.push(curr.val);
    curr = curr.right;
  }
  return root ? convert(0, inorder.length - 1) : null;

  function convert(i, j) {
    if (i > j) return null;
    const mid = parseInt((i + j) / 2);
    const node = new TreeNode(inorder[mid]);
    node.left = convert(i, mid - 1);
    node.right = convert(mid + 1, j);
    return node;
  }
};