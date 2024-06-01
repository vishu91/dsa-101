// LCA in tree
// Immidiat common ancestor
// Common ancestor for two given nodes

function lca(root, n1, n2) {
  if (!root) return null;

  if (root.data === n1 || root.data === n2) return root;

  let lcaLeft = lac(root.left, n1, n2);
  let lacRight = lac(root.right, n1, n2);

  if(lcaLeft !== null && lacRight !== null) return root;

  if(lcaLeft !== null && lacRight == null) return lcaLeft;
  else return lacRight;
}

// Start with easy question -- 
// if not able to solve the medium ques     
// Develop more thinking process
// Tushar roy - videos 
// Write logic on pen in paper
// Reach out to people or video contenct if you are not able to follow those ques
