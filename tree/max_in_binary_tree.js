

function maxInBinaryTree(root) {
    if(!root){
        return -1; // return negative val
    }else {
        let leftM = maxInBinaryTree(root.left);
        let rightM = maxInBinaryTree(root.right);
    
        return Math.max(root.data, leftM, rightM);
    }
}


//Max time taken to pass info to CTO to last employy.

//in nry tree cto at root

// find hight in nry tree 