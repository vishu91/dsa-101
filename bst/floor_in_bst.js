

function floorNode(root, x){
    let res = null;
    while(root){
        if(root.data == x) return root;
        else if(root.data > x){
            root = root.left;
        }else {
            res = root;
            root = root.right;
        }
    }
    return res;
}
