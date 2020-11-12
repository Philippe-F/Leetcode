var removeLeafNodes = function (root, target) {
  if (!root) return null;
  if (!removeLeafNodes(root.left, target)) root.left = null;
  if (!removeLeafNodes(root.right, target)) root.right = null;
  return (!root.left && !root.right) && root.val === target ? null : root;
};