class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this._insertNode(this.root, newNode);
    }
  }

  _insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this._insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this._insertNode(node.right, newNode);
      }
    }
  }

  insertNode(node) {
    // my practice
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNewNode(node, newNode);
    }
  }

  insNew(root, value) {
    if (root === null) return new Node(value);
    if (root.data > x) {
      root.left = this.insNew(root.left, value);
    } else {
      root.right = this.insNew(root.right, value);
    }
    return root;
  }

  insertNewNode(node, newNode) {
    // my practice
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNewNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNewNode(node.right, newNode);
      }
    }
  }

  searchInBst(value) {
    return this.searchNode(this.root, value);
  }

  searchNode(node, value) {
    if (node === null) return false;
    if (node.value === value) return true;

    if (value < node.value) {
      this.searchNode(node.left, value);
    } else {
      this.searchNode(node.right, value);
    }
  }

  iterativeInsert(root, value) {
    // ! Iterative insert in the bst
    let parent = null;
    let curr = root;
    let temp = new Node(x);

    while (curr !== null) {}
  }

  deletionInBST(root, x) {
    if(root === null) return root;
    if(root.data > x)
        root.left = this.deletionInBST(root.left, x);
    else if(root.data < x){
        root.right = this.deletionInBST(root.right, x);
    }else {
        //if
    }
  }

  delete(value) {
    this.root = this._deleteNode(this.root, value);
  }

  _deleteNode(node, value) {
    if (node === null) {
      return null;
    }
    if (value < node.value) {
      node.left = this._deleteNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this._deleteNode(node.right, value);
      return node;
    } else {
      // Node to be deleted found
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) { // ! left subtree is null, data reside in right
        return node.right;
      } else if (node.right === null) { // ! right subtree is null, data reside in left
        return node.left;
      } else {
        // Node with two children: get the in-order successor
        const minValue = this._findMinValue(node.right);
        node.value = minValue;
        node.right = this._deleteNode(node.right, minValue);
        return node;
      }
    }
  }

  _findMinValue(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node.value;
  }

  iterativeBSTSearch(root, value) {
    // !implement iterative Bst search
    if (root === null) return false;
    while (root !== null) {
      if (root.value === value) return true;
      if (root.value > x) {
        root = root.left;
      } else {
        root = root.right;
      }
    }
    return false;
  }

  // T = O(log n);
  // S = O(h);

  search(value) {
    return this._searchNode(this.root, value);
  }

  _searchNode(node, value) {
    if (node === null) {
      return false;
    }
    if (value < node.value) {
      return this._searchNode(node.left, value);
    } else if (value > node.value) {
      return this._searchNode(node.right, value);
    } else {
      return true;
    }
  }

  // In-order traversal
  inOrderTraversal(node, visit) {
    if (node !== null) {
      this.inOrderTraversal(node.left, visit);
      visit(node);
      this.inOrderTraversal(node.right, visit);
    }
  }

  // Pre-order traversal
  preOrderTraversal(node, visit) {
    if (node !== null) {
      visit(node);
      this.preOrderTraversal(node.left, visit);
      this.preOrderTraversal(node.right, visit);
    }
  }

  // Post-order traversal
  postOrderTraversal(node, visit) {
    if (node !== null) {
      this.postOrderTraversal(node.left, visit);
      this.postOrderTraversal(node.right, visit);
      visit(node);
    }
  }
}

// Example Usage
const bst = new BinarySearchTree();
bst.insert(5);
bst.insert(3);
bst.insert(7);
bst.insert(2);
bst.insert(4);
bst.insert(6);
bst.insert(8);

const printNode = (node) => console.log(node.value);

console.log("In-order Traversal:");
bst.inOrderTraversal(bst.root, printNode); // Output: 2, 3, 4, 5, 6, 7, 8

console.log("Pre-order Traversal:");
bst.preOrderTraversal(bst.root, printNode); // Output: 5, 3, 2, 4, 7, 6, 8

console.log("Post-order Traversal:");
bst.postOrderTraversal(bst.root, printNode); // Output: 2, 4, 3, 6, 8, 7, 5

console.log("Search for value 4:", bst.search(4)); // Output: true
console.log("Search for value 10:", bst.search(10)); // Output: false
