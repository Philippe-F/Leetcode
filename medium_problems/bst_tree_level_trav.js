var levelOrder = function (root) {
  let res = [];

  function bfs(node, depth) {
    if (!node) return;

    if (res.length === depth) {
      res.push([]);
    }

    res[depth].push(node.val);
    bfs(node.left, depth + 1);
    bfs(node.right, depth + 1);
  }

  bfs(root, 0);
  return res;
};