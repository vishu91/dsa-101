class Node {
    constructor(data){
        this.data = data;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(element){
        const newNode = new Node(element);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if(this.isEmpty()){
            return 'Underflow';
        }

        const poppedNode = this.top;
        this.top = this.top.next;
        this.size--;
        return poppedNode.data;
    }

    peek(){
        if(this.isEmpty()){
            return 'No elements in stack';
        }
        return this.top.data;
    }

    isEmpty() {
        return this.size === 0;
    }

    getSize(){
        return this.size;
    }

    print(){
        let current = this.top;
        const elements = [];
        while (current !== null){
            elements.push(current.data);
            current = current.next;
        }
        console.log(elements.join(' '));
    }
}

const stack =  new Stack();

console.log(stack.isEmpty());

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.getSize());

stack.print();

console.log(stack.pop());
stack.print();
console.log(stack.getSize());
console.log(stack.isEmpty());
