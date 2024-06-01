class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      return "Underflow";
    }
    return this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
        return 'No Elements in stack';
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }

  print() {
    console.log(this.items.join(" "));
  }
}

const stack = new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);


console.log(stack.peek());

console.log(stack.size());

stack.print();

console.log(stack.pop());

stack.print();
console.log(stack.size());

console.log(stack.isEmpty());
