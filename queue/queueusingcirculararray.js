class CircularQueue {
    constructor(size) {
      this.size = size + 1; // One slot is intentionally left empty to differentiate between full and empty states
      this.items = new Array(this.size);
      this.front = 0;
      this.rear = 0;
    }
  
    // Enqueue - Add an element to the end of the queue
    enqueue(element) {
      if (this.isFull()) {
        throw new Error("Queue is full");
      }
      this.items[this.rear] = element;
      this.rear = (this.rear + 1) % this.size;
    }
  
    // Dequeue - Remove an element from the front of the queue
    dequeue() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      const element = this.items[this.front];
      this.front = (this.front + 1) % this.size;
      return element;
    }
  
    // Peek - Get the front element of the queue
    frontElement() {
      if (this.isEmpty()) {
        throw new Error("Queue is empty");
      }
      return this.items[this.front];
    }
  
    // isEmpty - Check if the queue is empty
    isEmpty() {
      return this.front === this.rear;
    }
  
    // isFull - Check if the queue is full
    isFull() {
      return (this.rear + 1) % this.size === this.front;
    }
  
    // Size - Get the number of elements in the queue
    size() {
      return (this.rear - this.front + this.size) % this.size;
    }
  
    // Print - Print all elements in the queue
    print() {
      if (this.isEmpty()) {
        console.log("Queue is empty");
        return;
      }
      let i = this.front;
      let result = "";
      while (i !== this.rear) {
        result += this.items[i] + " ";
        i = (i + 1) % this.size;
      }
      console.log(result.trim());
    }
  }
  
  // Example usage:
  const queue = new CircularQueue(5);
  
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
  
  console.log(queue.frontElement()); // Output: 3
  