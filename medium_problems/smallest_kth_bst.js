var kthSmallest = function(root, k) {
  let smallVals = null, count = k; 
  
    function traverse(node) {
      if (!node) return;
      traverse(node.left)
      if (count > 0) {
        smallVals = node.val;
        count--;
      } else {
        return; 
      } 
      traverse(node.right)
    }
  
  traverse(root); 
  return smallVals
};