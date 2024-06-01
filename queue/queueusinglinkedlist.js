class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
    constructor() {
      this.front = null; // Points to the front node of the queue
      this.rear = null;  // Points to the rear node of the queue
      this.length = 0;   // Keeps track of the number of elements in the queue
    }
  
    // Enqueue - Add an element to the rear of the queue
    enqueue(value) {
      const newNode = new Node(value);
      if (this.rear) {
        this.rear.next = newNode;
      }
      this.rear = newNode;
      if (!this.front) {
        this.front = newNode;
      }
      this.length++;
    }
  
    // Dequeue - Remove an element from the front of the queue
    dequeue() {
      if (!this.front) {
        throw new Error("Queue is empty");
      }
      const dequeuedValue = this.front.value;
      this.front = this.front.next;
      if (!this.front) {
        this.rear = null;
      }
      this.length--;
      return dequeuedValue;
    }
  
    // Peek - Get the front element of the queue without removing it
    peek() {
      if (!this.front) {
        throw new Error("Queue is empty");
      }
      return this.front.value;
    }
  
    // isEmpty - Check if the queue is empty
    isEmpty() {
      return this.length === 0;
    }
  
    // Size - Get the number of elements in the queue
    size() {
      return this.length;
    }
  
    // Print - Print all elements in the queue
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      let current = this.front;
      let result = "";
      while (current) {
        result += current.value + " ";
        current = current.next;
      }
      console.log(result.trim());
    }
  }
  
  // Example usage:
  const queue = new Queue();
  
  queue.enqueue(1);
  queue.enqueue(2);
  queue.enqueue(3);
  queue.enqueue(4);
  
  queue.print(); // Output: 1 2 3 4
  
  queue.dequeue();
  queue.dequeue();
  
  queue.print(); // Output: 3 4
  
  queue.enqueue(5);
  queue.enqueue(6);
  
  queue.print(); // Output: 3 4 5 6
  
  console.log(queue.peek()); // Output: 3
  console.log(queue.isEmpty()); // Output: false
  console.log(queue.size()); // Output: 4
  