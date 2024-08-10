const Node = require('../common/Node');
const Queue = require('../queue/queueimp');

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    let node = new Node(value);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertRecursive(this.root, node);
    }
  }

  insertRecursive(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertRecursive(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertRecursive(node.right, newNode);
      }
    }
  }

  printInOrder(root) {
    if (root) {
      this.printInOrder(root.left);
      console.log(root.value);
      this.printInOrder(root.right);
    }
  }

  bfs(root){
      if(!root)
        return;
    let bfsData = [];
    console.log('bfs print', bfsData);
    let queue = new Queue();
    queue.enqueue(root);
    while(!queue.isEmpty()){
        let temp = queue.front();
        queue.dequeue();
        console.log(temp.value);
        // bfsData.push(temp);
        if(temp.left){
            queue.enqueue(temp.left);
        }

        if(temp.right){
            queue.enqueue(temp.right);
        }
    }
    bfsData.forEach(element => {
        console.log(element.value);
    });
    // queue.printTreeQueue();
  }

  findDimeter(root) {
   
  }
}

// let root = new Node(10);
// root.left = new Node(20);
// root.right = new Node(30);

let tree = new BinaryTree();
tree.insert(50);
tree.insert(30);
tree.insert(70);
tree.printInOrder(tree.root);
// tree.findDimeter(tree.root);
tree.bfs(tree.root);
