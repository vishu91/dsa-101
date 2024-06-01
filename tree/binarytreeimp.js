class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
        this.root = newNode;
    } else {
        this._insertRecursive(this.root, newNode);
    }
  }

  _insertRecursive(node, newNode) {
    if(newNode.value < node.value){
        if(node.left === null) {
            node.left = newNode;
        } else {
            this._insertRecursive(node.left, newNode);
        }
    } else {
        if(node.right === null){
            node.right = newNode;
        } else {
            this._insertRecursive(node.right, newNode);
        }
    }
  }

  inOrderTraversal(node, visit) {
    if(node !== null) {
        this.inOrderTraversal(node.left, visit);
        visit(node);
        this.inOrderTraversal(node.right, visit);
    }
  }

  preOrderTraversal(node, visit) {
    if(node !== null){
        visit(node);
        this.preOrderTraversal(node.left, visit);
        this.preOrderTraversal(node.right, visit);
    }
  }

  postOrderTraversal(node, visit) {
    if(node !== null){
        this.postOrderTraversal(node.left, visit);
        this.postOrderTraversal(node.right, visit);
        visit(node);
    }
  }
}



// Inorder -   40, 20, 70, 50, 80, 10, 30, 60
// Preorder -  10, 20, 40, 50, 70, 80, 30, 60
// PostOrder - 40, 70, 80, 50, 20, 60, 30, 10 -- wrong

const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

const printNode = (node) => console.log(node.value);

console.log("In-Order Traversal:");
tree.inOrderTraversal(tree.root, printNode);

console.log("Pre-Order Traversal:");
tree.preOrderTraversal(tree.root, printNode);

console.log("Post-Order Traversal:");
tree.postOrderTraversal(tree.root, printNode);


