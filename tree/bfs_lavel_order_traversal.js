// using queue 

// Breath first search

// always check root is not null

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
        if (newNode.value < node.value) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this._insertRecursive(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this._insertRecursive(node.right, newNode);
            }
        }
    }

    bfs(visit) {
        if (this.root === null) return;
        const queue = [this.root];
        while (queue.length > 0) {
            const node = queue.shift();
            visit(node);
            if (node.left !== null) queue.push(node.left);
            if (node.right !== null) queue.push(node.right);
        }
    }
}

// Example Usage
const tree = new BinaryTree();
tree.insert(5);
tree.insert(3);
tree.insert(7);
tree.insert(2);
tree.insert(4);
tree.insert(6);
tree.insert(8);

const printNode = (node) => console.log(node.value);

console.log("Breadth-First Search (BFS) Traversal:");
tree.bfs(printNode);

