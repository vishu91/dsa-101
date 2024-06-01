const { root } = require("forever");

// dfs - 

function height(root){
    if(root == null)
            return 0;
    let leftH = height(root.left);
    let rightH = height(root.right);
    return Math.max(leftH, rightH) + 1;
}

return max(height(root.left), height(root.right)) + 1;