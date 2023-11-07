/**
 * Queue
 * seperti antrian
 * pake sistem FIFO => First-In-First-Out
 * @format
 */

class Queue {
  #container = [];

  enqueue(element) {
    this.#container.push(element);
  }
  dequeue() {
    return this.#container.shift();
  }
  getElement() {
    return this.#container;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.getElement());
queue.dequeue();
queue.dequeue();
console.log(queue.getElement());
