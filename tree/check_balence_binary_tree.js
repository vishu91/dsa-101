// find the height of each sub tree then check the its bal or now
// complexity T = O(n^2);
function isBal(root) {
  if (root == NULL) return true;
  let lh = height(root.left);
  let rh = height(root.right);

  return Math.abs(lh - rh) <= 1 && isBal(root.left) && isBal(root.right);
}


function isBalance(root) {
    if(!root)
        return 0;

    let lh = isBalance(root.left);
    if(lh == -1) return -1;
    let rh = isBalance(root.right);
    if(rh == -1) return -1;
    if(Math.abs(lh - rh) > 1) return -1;
    else return Math(lh, rh) + 1;
}