

function diameterOfBinaryTree(){
    if(!root) return 0;
    let d1 = 1 + height(root.left) + height(root.right);
    let d2 = diameter(root.left);
    let d3 = diameter(root.right);

    return max(d1, Math.max(d2, d3));
}


function diameterOpt(root) {
    if(!root) return 0;

    let lh = diameterOpt(root.left);
    let rh = diameterOpt(root.right);

    res = max(res, lh + rh + 1); // print result
    return 1+ max(lh, rh);
}


